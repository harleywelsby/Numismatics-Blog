import { Leader, LeaderType } from '../../../../shared/types/Leader.types';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  DescriptionSection,
  SectionSeparator,
  KeyValueGrid,
  KeyValueText,
  PrimaryDetailsWrapper,
  OpenModalButton,
  ProvenanceSectionHeader,
} from '../CoinDetails.styles';
import { useState } from 'react';
import { DenominationModal } from '../../DenominationModal/DenominationModal';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Routes } from '../../../../shared/utils/router';
import { CollectionItem } from '../../../../shared/types/CollectionItem.types';
import { hasDenominationData } from '../../../../assets/DenominationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

/**
 * Displays the provenance trail of the given coin.
 */
const ProvenanceSection = ({ coin }: { coin: CollectionItem }) => {
  if (!coin.provenance) {
    return null;
  }

  return (
    <DescriptionSection>
      <ProvenanceSectionHeader>Provenance</ProvenanceSectionHeader>
      <Timeline position="right" sx={{ marginRight: '200px' }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{coin.provenance.vendorOrOwner}</TimelineContent>
        </TimelineItem>
        {coin.provenance?.history?.map((item) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{item.vendorOrOwner}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </DescriptionSection>
  );
};

interface PrimaryDetailsSectionProps {
  coin: CollectionItem;
  leader: Leader;
}

/**
 * Displays the core details, e.g., Leader, Authority and Mint info.
 */
const PrimaryDetailsSection = ({ coin, leader }: PrimaryDetailsSectionProps) => {
  const showModalButton = hasDenominationData(coin.denomination);
  const [showDenominationModal, setShowDenominationModal] = useState(false);
  const leaderTitle = leader.type === LeaderType.Moneyer ? 'Moneyer' : 'Ruler';
  const isSmallScreen = useMediaQuery({ query: '(max-width: 35em)' });

  return (
    <PrimaryDetailsWrapper>
      <KeyValueGrid $center={!isSmallScreen}>
        <KeyValueText $rightAlign>
          <b>{`${leaderTitle}: `}</b>
        </KeyValueText>
        <KeyValueText>
          {leader.url ? (
            <Anchor href={leader.url} target="_blank" rel="noopener noreferrer">
              {leader.name}
            </Anchor>
          ) : (
            leader.name
          )}
          {` ${leader.reign ? `(${leader.type === LeaderType.Ruler ? 'r. ' : ''}${leader.reign})` : ''}`}
        </KeyValueText>
        <KeyValueText $rightAlign>
          <b>Authority: </b>
        </KeyValueText>
        <KeyValueText>{coin.authority}</KeyValueText>
        <KeyValueText $rightAlign>
          <b>Denomination: </b>
        </KeyValueText>
        <KeyValueText>
          {coin.denomination}{' '}
          {showModalButton && (
            <OpenModalButton
              onClick={() => setShowDenominationModal(true)}
              data-test-id={`denomination-modal-open`}
            >
              <FontAwesomeIcon icon={faCircleQuestion} size="1x" />
            </OpenModalButton>
          )}
        </KeyValueText>
        <KeyValueText $rightAlign>
          <b>Minted: </b>
        </KeyValueText>
        <KeyValueText>
          <Link to={Routes.MintMap + `?selected=${coin.mint.location}`}>{coin.mint.location}</Link>
          {` (${coin.mint.date})`}
        </KeyValueText>
        <KeyValueText $rightAlign>
          <b>Ref: </b>
        </KeyValueText>
        <KeyValueText>
          <Anchor href={coin.reference.url} target="_blank" rel="noopener noreferrer">
            {coin.reference.catalogueNumber}
          </Anchor>
        </KeyValueText>
      </KeyValueGrid>
      {coin.provenance && <ProvenanceSection coin={coin} />}
      <br />
      <SectionSeparator />
      {!isSmallScreen && <br />}
      {showDenominationModal && (
        <DenominationModal
          selectedCoin={coin}
          showModal={showDenominationModal}
          setShowModal={setShowDenominationModal}
        />
      )}
    </PrimaryDetailsWrapper>
  );
};

export default PrimaryDetailsSection;

const Anchor = styled.a`
  color: var(--title-orange);
`;

const Link = styled(ReactRouterLink)`
  color: var(--title-orange);
`;
