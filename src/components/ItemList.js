import React from 'react';
import {
  BsCollection,
  BsCloudDownload,
  BsCardHeading,
  BsBootstrap,
  BsCode,
  BsPatchCheck,
} from 'react-icons/bs';

import Item from './Item';

const ItemList = () => {
  return (
    <div className='wrapper'>
      <Item
        icon={<BsCollection />}
        title='Fresh new layout'
        content="With Bootstrap 5, we've created a fresh new layout for this template!"
      />
      <Item
        icon={<BsCloudDownload />}
        title='Free to download'
        content='As always, Start Bootstrap has a powerful collectin of free templates.'
      />
      <Item
        icon={<BsCardHeading />}
        title='Jumbotron hero header'
        content='The heroic part of this template is the jumbotron hero header!'
      />
      <Item
        icon={<BsBootstrap />}
        title='Feature boxes'
        content="We've created some custom feature boxes using Bootstrap icons!"
      />
      <Item
        icon={<BsCode />}
        title='Simple clean code'
        content='We keep our dependencies up to date and squash bugs as they come!'
      />
      <Item
        icon={<BsPatchCheck />}
        title='A name you trust'
        content='Start Bootstrap has been the leader in free Bootstrap templates since 2013!'
      />
    </div>
  );
};

export default ItemList;
