import {Route, Switch} from 'react-router-dom';
import {useState} from 'react';
import Layout from '../layout/Layout';
import Admin from '../admin/Admin';

import Blog from '../../pages/Blog';
import Contato from '../contato/Contato';
import Login from '../../pages/login/Login';
import Item from '../../pages/Item/Item';
import { Loja } from '../../pages/Loja';

function tryParse(str: string | null) {
    if(!str)
        return null;
    return JSON.parse(str);
}

const Routes = () => {
	const [session, setSession] = useState<any>(tryParse(localStorage.getItem('session')));

	return (
		<Switch>
			<Route exact path={'/'}
				render={(props)=><Layout><Loja/></Layout>}/>
			<Route exact path={'/blog'}
				render={(props)=><Layout><Blog/></Layout>}/>
			<Route exact path={'/contato'}
				render={(props)=><Layout><Contato/></Layout>}/>
			<Route exact path={'/login'}
				render={(props)=><Layout><Login/></Layout>}/>
			<Route exact path={'/item/:lojaitemId'}
				render={(props)=><Layout><Item/></Layout>}/>
			{session ?
				<Route exact path={'/admin'}
					render={(props)=><Layout><Admin/></Layout>}/> : null}
		</Switch>
	);
};

export default Routes;