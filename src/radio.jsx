import React, { useState } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import './styles.css';
import Question from './question';
import Article from './article';

const RadioGroupDemo = () => {
  const [value, setValue] = useState('Question'); // Default value is 'Question'

  return (
    <div>
      <form>
        <RadioGroup.Root
          className="RadioGroupRoot"
          defaultValue="Question"
          aria-label="View selection"
          onValueChange={(val) => setValue(val)} // Update the value on change
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className="RadioGroupItem" value="Question" id="r1">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r1">
              Question
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className="RadioGroupItem" value="Article" id="r2">
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor="r2">
              Article
            </label>
          </div>
        </RadioGroup.Root>
      </form>

      {/* Conditional rendering based on the selected value */}
      {value === 'Question' ? <Question /> : <Article />}
    </div>
  );
};

export default RadioGroupDemo;
