# Redux Thunk & Async Operations Guide

## Table of Contents

- [Introduction](#introduction)
- [What is Redux Thunk?](#what-is-redux-thunk)
- [How Redux Thunk Works](#how-redux-thunk-works)
- [Basic vs Thunk Dispatch](#basic-vs-thunk-dispatch)
- [Code Examples](#code-examples)
- [Best Practices](#best-practices)

## Introduction

Redux Thunk is a middleware for Redux that enables handling asynchronous operations in Redux actions. It extends Redux's capabilities by allowing action creators to return functions instead of just plain action objects.

## What is Redux Thunk?

- A middleware that allows `dispatch` to accept functions as well as objects
- Enables handling complex async operations (API calls, delayed actions, etc.)
- Provides access to both `dispatch` and `getState` within action creators

## How Redux Thunk Works

1. **Normal Redux Flow (without Thunk)**:

   ```javascript
   // Only accepts plain objects
   dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
   ```

2. **With Redux Thunk**:
   ```javascript
   // Can accept functions
   dispatch(async (dispatch, getState) => {
     const response = await api.fetchData();
     dispatch({ type: "FETCH_DATA_SUCCESS", payload: response });
   });
   ```

## Basic vs Thunk Dispatch

### Basic Dispatch

```javascript
// Regular action creator
const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

// Usage
dispatch(addTodo("Learn Redux"));
```

### Thunk Dispatch

```javascript
// Thunk action creator
const fetchTodos = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_TODOS_START" });
  try {
    const response = await api.getTodos();
    dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "FETCH_TODOS_ERROR", payload: error.message });
  }
};

// Usage
dispatch(fetchTodos());
```

## Code Examples

### Basic Thunk Pattern

```javascript
// Action Types
const FETCH_DATA_START = "FETCH_DATA_START";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

// Thunk Action Creator
const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: FETCH_DATA_START });

    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_ERROR, payload: error.message });
    }
  };
};
```

### Conditional Thunk

```javascript
const fetchUserIfNeeded = (userId) => {
  return (dispatch, getState) => {
    const { users } = getState();

    if (users[userId]) {
      return; // User already cached
    }

    return dispatch(fetchUser(userId));
  };
};
```

## Best Practices

1. **Error Handling**

   - Always include error handling in thunks
   - Dispatch appropriate error actions
   - Consider loading states

2. **Action Structure**

   - Use consistent action types (START/SUCCESS/ERROR pattern)
   - Keep actions focused and single-purpose
   - Use meaningful action names

3. **State Management**

   - Use getState() sparingly
   - Keep thunks pure when possible
   - Consider caching and optimization

4. **Testing**
   - Test both success and error cases
   - Mock API calls
   - Verify action sequences

## Common Use Cases

- API calls
- Complex state updates
- Conditional dispatching
- Chaining multiple actions
- Delayed actions
- WebSocket interactions

## Tips for Success

1. Keep thunks focused on a single responsibility
2. Use TypeScript for better type safety
3. Implement proper error handling
4. Consider using action creators for common patterns
5. Document complex thunks
6. Test thoroughly, including edge cases

## Additional Resources

- [Redux Thunk Documentation](https://github.com/reduxjs/redux-thunk)
- [Redux Official Guide](https://redux.js.org/)
- [Async Actions in Redux](https://redux.js.org/tutorials/fundamentals/part-6-async-logic)
