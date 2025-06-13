
import { useState } from "react";
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";
import Input from "../components/Input/Input";
import Radio from "../components/Radio/Radio";

const PageTeste = () => {

    const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ nome, email }); 
        alert(`Nome: ${nome}, Email: ${email}`);
        setEmail("");
        setNome("");
        e.target.reset(); 
    };
    return (
        <>


            <div className="flex flex-col  gap-2 items-center  h-60rem ">
                <h1>Page Teste</h1>
                <Button variant="primary"> Button </Button>
                <Button variant="primary" disabled> Button </Button>

                <Button variant="secondary"><span className="text-xl bold" > Button </span>  </Button>

                <Button variant="secondary" disabled> Button </Button>
                <Button variant="tertiary" > Button </Button>
                <Button variant="tertiary" disabled> Button </Button>






                <Checkbox label="Checkbox " defaultChecked={true} />
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox" />
                <div className="flex flex-col gap-2">

                    <Radio label='Novo' name="radio-group" defaultChecked={true} value="2" />
                    <Radio label='Usado' name="radio-group" value="2" />
                </div>
            </div>

            <form  onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4 bg-white rounded shadow">
                <Input
                    label="Nome Completo *"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    type="text"
                    placeholder="Escreva seu nome"
                />
                <Input
                    label="E-mail *"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    type="email"
                />
                <Button
                    variant="primary"
                    type="submit"

                >
                    Enviar
                </Button>
            </form>




   <Input
                    label="E-mail *"
                    placeholder="seu@email.com"
                    type="email"
                />



        </>

    );
}

export default PageTeste;