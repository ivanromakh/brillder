import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Grid, Slider } from '@material-ui/core';

import DragBox from './DragBox'
import HorizontalStepper from './horizontalStepper/horizontalStepper';
import {QuestionType} from '../model/question';

export interface QuestionProps {
  type: QuestionType
}

const QuestionComponent: React.FC<QuestionProps> = ({ type }) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid container className="left-sidebar sidebar" justify="center" item xs={2} sm={1}>
          <div>>></div>
          <DragBox name="T" />
          <DragBox name="P" />
          <DragBox name="R" />
          <DragBox name="S" />
          <DragBox name="V" />
        </Grid>
        <Grid container item xs={8} sm={10}>
          <Grid container direction="row">
            <Grid container justify="center" item xs={12}>
              <HorizontalStepper />
            </Grid>
          </Grid>
          <br />
        </Grid>
        <Grid container className="right-sidebar sidebar" item xs={2} sm={1}>
          <div>&lt;&lt;</div>
          <div className="odd">Q</div>
          <div className="even small">MULTIPLE CHOICE</div>
          <div className="odd small">SORT</div>
          <div className="even small">WORD FILL</div>
          <div className="odd small">HIGHLIGHT</div>
          <div className="even small">ALIGN</div>
          <div className="odd small">SHUFFLE</div>
          <div className="even small">PICTURE POINT</div>
          <div className="odd small">JUMBLE</div>
        </Grid>
      </Grid>
      <Grid container direction="row" className="page-fotter">
        <Grid container item xs={4} sm={7} md={8} lg={9}></Grid>
        <Grid container item xs={7} sm={4} md={3} lg={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <RemoveIcon className="white" color="inherit" />
            </Grid>
            <Grid item xs>
              <Slider className="white" aria-labelledby="continuous-slider" />
            </Grid>
            <Grid item>
              <AddIcon className="white" color="inherit" />
            </Grid>
            <Grid item className="percentages">
              55 %
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default QuestionComponent