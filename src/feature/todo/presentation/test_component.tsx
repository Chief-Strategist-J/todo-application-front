import React from "react";
import { useState, useEffect, useReducer, useRef } from "react";

type State = {
  name: string;
  score: number;
  loading: boolean;
};

type Person = {
  name: string;
};

type Action =
  | {
      type: "initialized";
      name: string;
    }
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    }
  | {
      type: "reset";
    };

function getPerson(): Promise<Person> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Bob" }), 1000)
  );
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "initialized":
      return { name: action.name, score: 0, loading: false };
    case "increment":
      return { ...state, score: state.score + 1 };
    case "decrement":
      return { ...state, score: state.score - 1 };
    case "reset":
      return { ...state, score: 0 };
  }
}

export default function TextComponent() {
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: "jaydeep",
    score: 0,
    loading: true,
  });

  const addButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    getPerson().then(({ name }) => dispatch({ type: "initialized", name }));
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Subtract</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
