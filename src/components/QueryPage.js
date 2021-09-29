import React, { useContext } from 'react';
import { QueryDataContext } from './QueryDataContext';
import { QueryInputForm } from './QueryInputForm';
import {ResultTable} from './ResultTable';


export function QueryPage() {

    return (
        <div>
            <QueryInputForm  formName="GitHub Reports"></QueryInputForm>
            <ResultTable></ResultTable>
        </div>
    );
}
