import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container, Wrapper } from './App.module';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    
      <Statistics 
        title='UPLOAD STATS'
        stats={data}
      />

      <Wrapper>
        <FriendList
        friends={friends}
      />

      <TransactionHistory
        transactions={transactions} />
      </Wrapper>
    </Container>
      
  );

};
