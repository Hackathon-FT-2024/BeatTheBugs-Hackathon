import ProductTable from "./ProductTable";
import { promises as fs } from 'fs';

export default async function Page() {
    const file = await fs.readFile(process.cwd() + '/src/resources/compAlim.json', 'utf8');
    const data = JSON.parse(file)
    const values = data.$values
    // console.log(data.$values)
    return (<div><ProductTable products={values} /></div>);
}

//TODO: fix table margin overflow + make header sticky
//TODO: create form to edit product