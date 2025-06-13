
import Button from "../components/Button/Button";
import Checkbox from "../components/Checkbox/Checkbox";
import Radio from "../components/Radio/Radio";

const PageTeste = () => {
    return (
        <>


            <div className="flex flex-col  gap-2 items-center  h-40rem w-40">
                <h1>Page Teste</h1>
                <Button variant="primary"> Button </Button>
                <Button variant="primary" disabled> Button </Button>

                <Button variant="secondary"><span className="text-xl bold" > Button </span>  </Button>

                <Button variant="secondary" disabled> Button </Button>
                <Button variant="tertiary" > Button </Button>
                <Button variant="tertiary" disabled> Button </Button>






                <Checkbox label="Checkbox " defaultChecked={true}/>
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox" />
                <Checkbox label="Checkbox" />
                <div className="flex flex-col gap-2">

                    <Radio label='Novo' name="radio-group" defaultChecked={true} value="2" />
                    <Radio label='Usado' name="radio-group" value="2" />
                </div>




            </div>



        </>

    );
}

export default PageTeste;