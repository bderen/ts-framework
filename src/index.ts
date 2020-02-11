import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.getElementById('root')
const user = User.buildUser({ name: 'Name', age: 20 })

if (root) {
	const userEdit = new UserEdit(
		root,
		user
	)
	
	userEdit.render()
} else {
	throw new Error('no root selector')
}

