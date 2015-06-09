### Reading APIs

#### What is an API?

An [API](http://en.wikipedia.org/wiki/Application_programming_interface), Application Programming Interface, is a set of routines, protocols, and tools for building software applications.

#### Authentication

* There are three ways to authenticate through Github ABI v3.

  * Basic Authentication

  * OAuth2 Token (sent in header)

  * OAuth2 Token (sent as a parameter)

* Requests that require authentication will return a `404 Not Found`. This is to prevent leakage of private information to unauthorized users.

#### Information Requests

* The profile information for a specific user:

  * `GET /users/:username`

* The repository listing for a specific user:

  * `GET /users/:username/repos`

* The recent, public activity for a specific user:

  * `GET /users/:username/events/public`

#### Request Limits

* Requests using Basic Authentication or OAuth can make up to 5,000 requests/hour.

* Unauthenticated requests have a limit of 60 requests/hour.

* Once you go over your rate limit you will receive an error response.

* You can increase your rate limit by passing you app's client ID and secret as part of the query string.



* **What if there is a lot of data returned?**

  * **How can I ask for more (or less) data from a request?**

  * **How do I know that there is more data available?**
