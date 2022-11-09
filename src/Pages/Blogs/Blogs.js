import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>Travel trek - Blogs</title>
            </Helmet>
            <div className='border-4 p-3 lg:p-10 border-emerald-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/42jkQVZ/maxresdefault.jpg" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>Difference between SQL and NoSQL</h3>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>SQL databases:</span>
                        <li><span className='font-semibold'>MS-SQL</span> is Microsoft’s relational database product, accessed with the proprietary Transact-SQL (T-SQL), and offered in a dozen editions targeted to different end users. Microsoft Azure includes a dedicated component for scaling MS-SQL databases in the cloud.</li>
                        <li><span className='font-semibold'>Oracle Database</span> is among the oldest and most-established RDBMSs. Its relational store is interfaced by PL/SQL, though it is adapting into a multi-model system.</li>
                        <li>Other major RDBMSs include <span className='font-semibold'>Access, Ingres, PostgreSQL, Sybase, and SQLite</span>..</li>
                    </ul>
                    <ul className=' mt-5 list-disc'>
                        <span className='font-bold underline'>NoSQL databases:</span>
                        <li>Apache <span className='font-semibold'>CouchDB</span>, like MongoDB, is a document-oriented database with JSON schemata and querying over JavaScript. CouchDB’s scaling capabilities stand out, employing a multi-master architecture over the typical single-master distributed design.</li>
                        <li><span className='font-semibold'>Redis</span> (Remote Dictionary Server), is the most popular key-value database. It is open-source, with a fast and distributed in-memory implementation, and supports many abstract data structures (some rarely found in other NoSQL).</li>
                        <li><span className='font-semibold'>InfinityDB</span> and Amazon’s DynamoDB implement two other key-value stores. Columnar stores like Cassandra, MariaDB, and Scylla scale well horizontally, and popular graph databases include ArangoDB, InfiniteGraph, and Neo4j.</li>
                    </ul>
                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-emerald-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/6W3FqvG/hero-ZCDm3-B.png" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>What is JWT, and how does it work?</h3>
                    <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is <strong> an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</strong> It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>How it works?</span>
                        <li>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</li>
                        <li>User sign-in using username and password or google/facebook..</li>
                        <li>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                        <li>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                        <li>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                    </ul>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>Security</span>
                        <li>Must use HTTPS to secure the Authorization headers.</li>
                        <li>Validate algorithm name explicitly. Do not completely rely on the algorithm mentioned in the header of JWT. There are a few known attacks based on the header like algo none attack, header stripping.</li>
                        <li>Revoking the session of a user from backend server is difficult. Since a JWT is set to automatically expire, If an attacker gets the token before it expires It leads to various exploits. Building a token revocation list on your server to invalidate tokens could be best way to mitigate.</li>
                        <li>If JWT is persisted on cookies, we need to create HttpOnly cookie. This will restrict third party javascripts from reading jwt token from cookie.</li>
                        <li>XSS - backend servers must always sanitize user generated data.
                        </li>
                        <li>CSRF  -  If JWT in persisted on cookies, CSRF attacks are possible. We can mitigate CSRF by using origin of request and special request headers.</li>
                    </ul>

                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-emerald-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/xqG1L94/Java-Script-vs-Node-JS-1.png" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>JavaScript</span>
                        <li>It is an accessible, bridge, parsed, lightweight, reactive, and web apps programming language.</li>
                        <li>It's a programming language, after all. Any browser with a competent browser engine will operate.</li>
                        <li>It's most commonly used on client-side servers.</li>
                        <li>The node community does not care about JavaScript.</li>
                        <li>It's made for creating network-centric apps.</li>
                        <li>It's a new release of the ECMA script that works on the C++-based V8 engine.</li>
                        <li>TypedJS, RamdaJS, and other JavaScript frameworks are examples.</li>
                    </ul>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>Node js</span>
                        <li>It's a bridge, open-source Js runtime environment for executing Js on the server.</li>
                        <li>It's a JavaScript translator and environment that includes some valuable libraries for JavaScript programming.</li>
                        <li>It's mainly popular on the server-side.</li>
                        <li>All node projects represent the JavaScript community.</li>
                        <li>It's made for real-time data-intensive apps that run on multiple platforms.</li>
                        <li>C++, C, and JavaScript are used.</li>
                        <li>Nodejs modules include Lodash and Express. All of these modules must be imported from npm.</li>
                    </ul>

                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-emerald-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/FqJFNCH/Image-Tiny-MCE-Nodejs-Email-Apps-Setup.jpg" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>How does NodeJS handle multiple requests at the same time?</h3>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    <p>A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.The cluster module allows easy creation of child processes that all share the same server ports.</p>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold underline'>steps</span>
                        <li> Create a NodeJS application and install the required Express.js module.</li>
                        <li> Create an index.js file on your root directory with the following code.(If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.)</li>
                        <li>Run the index.js file using the following command.</li>
                        <li>
                            <ul className='list-disc'>
                                <strong>Using worker_threads Module:</strong><span>The best solution for CPU performance is Worker Thread. This module is used in Node.js because it is useful for performing heavy JavaScript tasks.</span>
                                <p>Instead of having:</p>
                                <li>One process</li>
                                <li>One thread</li>
                                <li>One event loop</li>
                                <li>One JS Engine Instance</li>
                                <li>One Node.js Instance</li>
                                <li>Worker threads have</li>
                            </ul>
                            <ul className='list-disc'>

                                <p>One process:</p>
                                <li>Multiple threads</li>
                                <li>One event loop per thread</li>
                                <li>One JS Engine Instance per thread</li>
                                <li>One Node.js Instance per thread</li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Blogs;