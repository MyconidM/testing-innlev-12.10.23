"use client"
import Header from "@/components/Header";
import CreateUser from "@/components/CreateUser";
import { useState } from "react";


export default function Home() {
  const [user, setUser] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const submitUser = (event) => {
    event.preventDefault();
    console.log(username, password)

    //https://xn--fullstkk-o0a.no/courses/react-applikasjon/03-tic-tac-toe
    const usernames = user.map((e) => e.username)
    const passwords = user.map((e) => e.password)
    const name = usernames.includes(username);
    const word = passwords.includes(password);
    const message = document.getElementById('exists');
    if (name || word) {
      name? message.innerHTML = 'Brukernavn finnes, velg annet' : null;
      word? message.innerHTML = 'Passord finnes, velg annet' : null;
      name && word ? message.innerHTML = 'Brukernavn og passord finnes' : null;
    } else {
      setUser(() =>[...user, {username, password}]);
      message.innerHTML = ''
    }
    // usernames.includes(username) || passwords.includes(password) ? 
    // document.getElementById('exists').innerHTML = 'Brukernavn eller passord finnes, velg annet'
    // //console.log('Brukernavn eller passord finnes allerede skriv annet') 
    // : setUser(() =>[...user, {username, password}]);
    //console.log(user)
}
//console.log(user)
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <Header title="Create user"/>
      <div className="conteiner">
      <CreateUser 
        submitUser={submitUser}
        username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword}
      />
      </div>
      <p className="text-red-600" id="exists"></p>
    </main>
  )
}
