// import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const root = document.getElementById('root')
const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
	return User.buildUser(json)
})

users.on('change', () => {
	new UserList(root, users).render()
})

users.fetch()

// if (root) {
// 	const userEdit = new UserEdit(
// 		root,
// 		user
// 	)
	
// 	userEdit.render()
// } else {
// 	throw new Error('no root selector')
// }

