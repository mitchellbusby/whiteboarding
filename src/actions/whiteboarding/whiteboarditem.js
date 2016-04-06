import { CREATE_WHITEBOARD_ITEM_COMPLETE, DELETE_WHITEBOARD_ITEM_COMPLETE, DELETE_WHITEBOARD_ITEM_ATTEMPT,
  UPVOTE_WHITEBOARD_ITEM_COMPLETE, DOWNVOTE_WHITEBOARD_ITEM_COMPLETE, DEVOTE_WHITEBOARD_ITEM_COMPLETE } from '../../action-types/whiteboarding/constants';


export const CreateWhiteboardItemAsync = function() {
};

export const CreateWhiteboardItemComplete = function(Item, IsSuccess) {
  return { type: CREATE_WHITEBOARD_ITEM_COMPLETE, item: Item, isSuccess: IsSuccess };
};

export const DeleteWhiteboardItemComplete = function(Id) {
  return { type: DELETE_WHITEBOARD_ITEM_COMPLETE, itemId: Id };
};

export const AttemptDeleteWhiteboardItem = function(Id) {
  return { type: DELETE_WHITEBOARD_ITEM_ATTEMPT, itemId: Id };
};

export const UpvoteWhiteboardItemComplete = function(Id, UserId) {
  return { type: UPVOTE_WHITEBOARD_ITEM_COMPLETE, itemId: Id, userId: UserId };
};


export const DownvoteWhiteboardItemComplete = function(Id, UserId) {
  return { type: DOWNVOTE_WHITEBOARD_ITEM_COMPLETE, itemId: Id, userId: UserId };
};

export const DevoteWhiteboardItemComplete = function(Id, UserId) {
  return { type: DEVOTE_WHITEBOARD_ITEM_COMPLETE, itemId: Id, userId: UserId };
};
