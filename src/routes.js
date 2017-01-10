import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './app';
import Login from './components/login';
import Home from './components/home';
import Invite from './components/invite';
import GradeNotification from './components/grade-notification';
import Game from './components/game';
import CountdownClock from './components/countdown-clock';
import Question from './components/question';
import AnswerGrade from './components/answer-grade';
import QuestionResult from './components/question-result';
import { Provider } from 'react-redux';
import store from './store';

const routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Login} />
      <Route path="/home" component={Home}>
        <Route path="/invite" component={Invite}/>
        <Route path="/gradenotification" component={GradeNotification}/>
      </Route>
      <Route path="/game" component={Game}>
        <Route path="/countdownclock" component={CountdownClock}/>
        <Route path="/question" component={Question}/>
        <Route path="/answergrade" component={AnswerGrade}/>
        <Route path="/gradenotification" component={GradeNotification}/>
        <Route path="/questionresult" component={QuestionResult}/>
      </Route>
      </Route>
    </Router>
  </Provider>
)

export default routes;
