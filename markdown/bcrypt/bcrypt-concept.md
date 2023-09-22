
## bcrypt

This package of the librery node.js, it's work is encrypt datas the importance.
The how is with following steps:

- **Salt:** is generate salt, is tell, that generate an longitude the characters the 8 a most.
**Command:** is following:
~~~
const salt = bcrypt.genSaltSync(10);
~~~
This generate the following in the random form:
~~~
"$2a$10$cSCJiuepfXUvLWjOX7UmT.yPqQKgtCuNtXyQTIpqNXv9BJwFSFTfO"
~~~

- **hash:** An encryption of data is know as a hash, is tell, the combination of:
~~~
salt and data(is tell password or other thing)
~~~

**Command:** is following:
~~~
const password = "12345";
const salt = bcrypt.genSaltSync(10);

var hash = bcrypt.hashSync( password , salt);
~~~

This combination the password and salt, and for verify is with following command:

~~~
const password = "12345";
const salt = bcrypt.genSaltSync(10);

var hash = bcrypt.hashSync( password , salt);

const compare = bcrypt.compareSync( password , hash); // true
const compare = bcrypt.compareSync( "1234" , hash); // false
~~~




