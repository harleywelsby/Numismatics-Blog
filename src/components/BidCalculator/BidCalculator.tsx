import { useState } from 'react';
import { HeaderSeparator, HeaderText, PageWrapper } from '../../shared/styles/sharedStyles';
import {
  AddedCostInput,
  BidInput,
  BreakdownText,
  BreakdownWrapper,
  CalcWrapper,
  CostInputWrapper,
  HeaderParagraph,
  InputSection,
  PresetButton,
  PresetWrapper,
  ResetButton,
  SectionHeader,
  Separator,
  TextBoxLabel,
  TotalText,
} from './BidCalculator.styles';

type AuctionPreset = {
  name: string;
  buyersPremium: number;
  taxOnFees: number;
  paymentFee: number;
  taxOnPaymentFee: number;
  otherFees?: number[];
};

const presets: AuctionPreset[] = [
  {
    name: 'Mowbray Collectables',
    buyersPremium: 17,
    taxOnFees: 15,
    paymentFee: 3,
    taxOnPaymentFee: 15,
  },
  {
    name: 'Leu Numismatik',
    buyersPremium: 22.5,
    taxOnFees: 0,
    paymentFee: 4,
    taxOnPaymentFee: 0,
    otherFees: [12, 25],
  },
];

const getPremium = (bidAmount: number, buyersPremium: number) => {
  return bidAmount * (buyersPremium / 100);
};

const getTaxOnPremium = (bidAmount: number, buyersPremium: number, taxOnFees: number) => {
  return bidAmount * (buyersPremium / 100) * (taxOnFees / 100);
};

const getPaymentFee = (total: number, paymentFee: number) => {
  return total * (paymentFee / 100);
};

const getTaxOnPaymentFee = (total: number, paymentFee: number, taxOnFees: number) => {
  return total * (paymentFee / 100) * (taxOnFees / 100);
};

const calculateTotalExcludingPaymentFee = (
  bidAmount: number,
  buyersPremium: number,
  taxOnFees: number,
): number => {
  const premium = getPremium(bidAmount, buyersPremium);
  const taxOnPremium = getTaxOnPremium(bidAmount, buyersPremium, taxOnFees);

  return bidAmount + premium + taxOnPremium;
};

export const BidCalculator = () => {
  const [selectedPreset, setSelectedPreset] = useState<AuctionPreset | null>(null);
  const [bidAmount, setBidAmount] = useState<number | null>(null);
  const [buyersPremium, setBuyersPremium] = useState<number | null>(null);
  const [taxOnFees, setTaxOnFees] = useState<number | null>(null);
  const [paymentFee, setPaymentFee] = useState<number | null>(null);
  const [otherCosts, setOtherCosts] = useState<number[]>([]);

  // Hard block the calculator
  // if (!ENABLE_BID_CALCULATOR) {
  //   navigate(Routes.Error);
  //   return <ErrorPage />;
  // }

  const handleReset = () => {
    setBidAmount(null);
    setBuyersPremium(null);
    setTaxOnFees(null);
    setPaymentFee(null);
    setOtherCosts([]);
    setSelectedPreset(null);
  };

  const handlePresetClick = (preset: AuctionPreset) => {
    setSelectedPreset(preset);
    setBuyersPremium(preset.buyersPremium);
    setPaymentFee(preset.paymentFee);
    setTaxOnFees(preset.taxOnFees);
    setOtherCosts(preset.otherFees ?? []);
  };

  const calculateTotal = () => {
    const totalExclPaymentFee = calculateTotalExcludingPaymentFee(
      bidAmount ?? 0,
      buyersPremium ?? 0,
      taxOnFees ?? 0,
    );

    const paymentFeeAmount = getPaymentFee(totalExclPaymentFee, paymentFee ?? 0);
    const taxOnPaymentFeeAmount = getTaxOnPaymentFee(
      totalExclPaymentFee,
      paymentFee ?? 0,
      taxOnFees ?? 0,
    );

    return totalExclPaymentFee + paymentFeeAmount + taxOnPaymentFeeAmount;
  };

  return (
    <PageWrapper>
      <HeaderText>Bid Calculator</HeaderText>
      <HeaderSeparator />
      <HeaderParagraph>
        When bidding in numismatic auctions, it can be difficult to calculate the actual price of a
        given coin, once fees, tax and delivery are included. This calculator helps determine the
        total price of a bid, including fees.
      </HeaderParagraph>
      <HeaderParagraph>
        Note that I am not affiliated with the auction houses in the presets in any way - just an
        avid bidder!
      </HeaderParagraph>
      <Separator $large $marginOverride="1rem" />
      <SectionHeader>Presets</SectionHeader>
      <PresetWrapper>
        {presets.map((preset, index) => (
          <PresetButton
            $selected={selectedPreset === preset}
            key={index}
            onClick={() => handlePresetClick(preset)}
          >
            {preset.name}
          </PresetButton>
        ))}
      </PresetWrapper>
      <Separator $large $marginOverride="1rem 0" />
      <CalcWrapper>
        <TextBoxLabel>Bid Amount ($)</TextBoxLabel>
        <BidInput
          type="number"
          placeholder="E.g., $50"
          value={bidAmount ?? ''}
          onChange={(e) => setBidAmount(Number(e.target.value))}
        />
        <Separator />
        <InputSection>
          <CostInputWrapper>
            <TextBoxLabel>Buyer's Premium (%):</TextBoxLabel>
            <AddedCostInput
              type="number"
              placeholder="E.g., 22.5%"
              value={buyersPremium ?? ''}
              onChange={(e) => setBuyersPremium(Number(e.target.value))}
            />
          </CostInputWrapper>
          <CostInputWrapper>
            <TextBoxLabel>Payment Fee (%):</TextBoxLabel>
            <AddedCostInput
              type="number"
              placeholder="E.g., 2%"
              value={paymentFee ?? ''}
              onChange={(e) => setPaymentFee(Number(e.target.value))}
            />
          </CostInputWrapper>
          <CostInputWrapper>
            <TextBoxLabel>Tax on Fees (%):</TextBoxLabel>
            <AddedCostInput
              type="number"
              placeholder="E.g., 15%"
              value={taxOnFees ?? ''}
              onChange={(e) => setTaxOnFees(Number(e.target.value))}
            />
          </CostInputWrapper>
        </InputSection>
      </CalcWrapper>
      <Separator $large $marginOverride="1rem" />
      <TotalText>
        <b>Total:</b> ${calculateTotal().toFixed(2)}
      </TotalText>
      <Separator $marginOverride="1rem" />
      <BreakdownWrapper>
        <BreakdownText>
          <b>Buyer's Premium:</b> ${getPremium(bidAmount ?? 0, buyersPremium ?? 0).toFixed(2)}
        </BreakdownText>
        <BreakdownText>
          <b>Tax on Premium:</b> $
          {getTaxOnPremium(bidAmount ?? 0, buyersPremium ?? 0, taxOnFees ?? 0).toFixed(2)}
        </BreakdownText>
        <BreakdownText>
          <b>Payment Fee:</b> ${getPaymentFee(bidAmount ?? 0, paymentFee ?? 0).toFixed(2)}
        </BreakdownText>
        <BreakdownText>
          <b>Tax on Payment Fee:</b> $
          {getTaxOnPaymentFee(bidAmount ?? 0, paymentFee ?? 0, taxOnFees ?? 0).toFixed(2)}
        </BreakdownText>
        {otherCosts.length > 0 && (
          <BreakdownText>
            <b>Other Fees:</b> ${otherCosts.reduce((a, b) => a + b, 0).toFixed(2)}
          </BreakdownText>
        )}
        <br />
      </BreakdownWrapper>
      <ResetButton onClick={handleReset}>Reset</ResetButton>
    </PageWrapper>
  );
};
