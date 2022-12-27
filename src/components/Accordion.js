import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Show(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem className='!bg-[#2f3b69] !text-white'>
          <AccordionHeader targetId="1">How Do I Sign Up?</AccordionHeader>
          <AccordionBody accordionId="1">
            Once you've paid for one of our plans, the indicator will be sent to the Trading View email address you used to sign up. Order fulfillment takes 24 hours.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Is Viper Algo Beginner Friendly?</AccordionHeader>
          <AccordionBody accordionId="2">
            Viper Algo removes all the noise from the market and allows you to become a better trader.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Will Viper Algo guarantee me profit?</AccordionHeader>
          <AccordionBody accordionId="3">
            The majority of Viper Algo users profit from the indicator. Top analyst use it to execute trades on Discord. However, we are unable to provide a win rate of 100%. We think that Viper Algo has reached its pinnacle of brilliance and that this is the greatest indicator on the market.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Where do I use the Indicator?</AccordionHeader>
          <AccordionBody accordionId="4">
            Viper Algo works on top of TradingView.com. Open up a free account for TradingView and you will be able to add the indicator from the indicator tab at the top left.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">How does the Indicator work?</AccordionHeader>
          <AccordionBody accordionId="5">
            The indicator combines many top analyst strategies to determine the most accurate long and short signals.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">Does it work on all timeframes and markets?</AccordionHeader>
          <AccordionBody accordionId="6">
            Yes, it works on any stock, crypto, futures or forex pair.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Show;