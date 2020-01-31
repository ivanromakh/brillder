import React from 'react';
import { Grid } from '@material-ui/core';

import './questionComponents.scss';
import { Question, QuestionTypeEnum } from '../../../model/question';
import ShortAnswerComponent from '../questionTypes/shortAnswerComponent';
import SwitchQuestionComponent from '../components/QuestionComponentSwitcher';

type QuestionComponentsProps = {
  history: any
  brickId: number
  question: Question
  swapComponents: Function
}

const QuestionComponents = ({ history, brickId, question, swapComponents }: QuestionComponentsProps) => {
  const renderDropBox = (component: any, index: number) => {
    const {type} = question;
    switch (type) {
      case (QuestionTypeEnum.ShortAnswer):
        return <SwitchQuestionComponent type={component.type} index={index} swapComponents={swapComponents} uniqueComponent={ShortAnswerComponent} />
      default:
        history.push(`/brick/${brickId}/build/investigation/question`);
        return <div>...Loading...</div>
    }
  }

  return (
    <div className="short-answer">
      {
        question.components.map((comp, i) => {
          return (
            <Grid key={i} container direction="row" className="drop-box">
              {
                renderDropBox(comp, i)
              }
            </Grid>
          )
        })
      }
    </div>
  );
}

export default QuestionComponents;