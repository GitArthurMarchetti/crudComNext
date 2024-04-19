import Players from "../components/players";

import { select } from "../services.js"

export default async function Home() {
  const data = await select()

  return (
    <Players list={data}/>    
  );
}
