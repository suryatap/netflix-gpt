import React from "react";

function App() {
  const [todo, setTodo] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={() => setTodo([...todo, text])}>ADD TODO</button>
        <ul>
          {todo.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// For adding anything extra

function App() {
  const [todo, setTodo] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button
          onClick={() => {
            if (text.trim === "") return setTodo([...todo, text]);
            setText("");
          }}
        >
          ADD TODO
        </button>
        <ul>
          {todo.map((t, i) => (
            <li key={i}>
              {t}
              <button
                onClick={() => setTodo(todo.filter((_, idx) => idx !== i))}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// javascript callback

setTimeout(function (){
    console.log("abc");
}, 5000);

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function(){
    api.proceedToPayment(function (){
        api.showOrderSummery(function(){
            api.updatewallet()
        })
    })
})

