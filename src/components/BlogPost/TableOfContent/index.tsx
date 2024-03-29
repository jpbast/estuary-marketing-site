import React, { useState } from 'react';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as S from './styles';
import { useHeadsObserver } from '../../../hooks/useHeadsObserver';

export type TableOfContentItem = {
  id: string;
  heading: string;
  items?: TableOfContentItem[];
};

type ItemProps = {
  item: TableOfContentItem;
  depth: number;
  activeId?: string;
};

const Item = ({ item, depth, activeId }: ItemProps) => {
  const isActive = activeId === item.id;

  return (
    <>
      <AccordionDetails
        style={{ display: 'flex', flex: 1, alignItems: 'center', paddingLeft: 0, paddingTop: 0, gap: 8 }}
        sx={{
          'h2, h3, h4': {
            scrollMarginTop: -500,
          },
        }}
      >
        <div style={{ width: 20 * (depth + 1), backgroundColor: '#dfdfdf', height: 1, flexShrink: 0 }} />
        <a
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById(`${item.id}`);
            window.scrollTo({ top: el.offsetTop - 200, behavior: 'smooth' });
          }}
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? '#47506D' : '#989DAF',
          }}
        >
          {item.heading}
        </a>
      </AccordionDetails>
      {item.items?.length > 0 &&
        item.items.map((child) => <Item key={item.id} item={child} depth={depth + 1} activeId={activeId} />)}
    </>
  );
};

type TableOfContentProps = {
  items: TableOfContentItem[];
};

const TableOfContent: React.FC<TableOfContentProps> = ({ items }) => {
  const [expanded, setExpanded] = useState(false);

  const { activeId } = useHeadsObserver();

  if (!items) return null;

  const border = '1px solid #EBEDF2';
  return (
    <S.Container
      elevation={0}
      style={{
        border: 'none',
        padding: 0,
        borderTop: border,
        borderBottom: border,
        color: '#04192B',
        fontSize: '1.2rem',
        fontWeight: 600,
      }}
      sx={{
        '& *': {
          border: 'none',
          outline: 'none',
        },
        '& > div': {
          padding: 0,
          border: 'none',
          outline: 'none',
        },
      }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
        In this article
      </AccordionSummary>
      {items.map((item) => (
        <Item key={item.id} item={item} depth={1} activeId={activeId} />
      ))}
    </S.Container>
  );
};

export default TableOfContent;
