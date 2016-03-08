import { CREATE_WHITEBOARD_ITEM_COMPLETE } from '../../action-types/whiteboarding/constants';


export const CreateWhiteboardItemAsync = function() {
};

export const CreateWhiteboardItemComplete = function(Item, IsSuccess) {
  return { type: CREATE_WHITEBOARD_ITEM_COMPLETE, item: Item, isSuccess: IsSuccess };
};
