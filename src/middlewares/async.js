export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action)
    }
    
    console.log({ dispatch })

    action.payload
      .then(function(response) {
        const newAction = { ...action, payload: response }
        dispatch(newAction)
      });
  };
}
