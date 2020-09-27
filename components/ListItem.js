import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem as NBListItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Button,
  Icon,
} from 'native-base';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

function ListItem({ navigation, singleMedia, editadle }) {
  return (
    <NBListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{ uri: mediaUrl + singleMedia.thumbnails.w160 }} />
      </Left>
      <Body>
        <Text>{singleMedia.title}</Text>
        <Text note numberOfLines={1}>{singleMedia.description}</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => {
          navigation.navigate('Single', { file: singleMedia });
        } }>
          <Icon name={'eye'}></Icon>
          <Text>View</Text>
        </Button>
        {editable && <>
          <Button success transparent onPress={
            () => {
              // modify
            }}>
            <Icon name={'create'}></Icon>
            <Text>Modify</Text>
          </Button>
          <Button danger transparent onPress={
            () => {
              // TODO: use api to delete file
            }}>
            <Icon name={'trash'}></Icon>
            <Text>Delete</Text>
          </Button>
        </>
        }
      </Right>
    </NBListItem>
  );
}

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
  editable: PropTypes.bool,
};

export default ListItem;
