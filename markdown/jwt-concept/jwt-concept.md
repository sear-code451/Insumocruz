
## JWT

This is almost equal a bcrypt... but this is most sensitive and at the same time safe, because this give an **token**, but before should a **PRIVATE KEY** that without this not can be create the token.

The **token** content the **payload** that we are create before.

It need is first use the command:
~~~
jwt.sign( payload, PRIVATEKEY, (err, token) => {
    // read the link and following the steps
} )
~~~

**Example that each one does:**
~~~
const payload = {
    data: name,
    data2: email,
    data3: password
}; // REQUIRED TO BE AN OBJECT


const PRIVATEKEY = "secret3key400123";

const token = jwt.sign( payload, PRIVATEKEY, (err, token) => {
    // read the link and following the steps
} );
~~~
**IMPORTANT:** the payload required to be an object.

- **compara:** just that bcrypt the previous bcrypt is necessary compare the **token** geting with the one we want:
~~~
const token = jwt.sign( payload, PRIVATEKEY, (err, token) => {
    // read the link and following the steps
} );

const decoded = jwt.verify( token, PRIVATEKEY );
~~~

**With this can see the payload.**
