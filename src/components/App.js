import DescriptionProfile from 'components/DescriptionProfile/DescriptionProfile';
// import { useReducer } from 'react';
import user from './DescriptionProfile/user.json';

export default function App() {
  return (
    <>
      <DescriptionProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </>
  );
}
