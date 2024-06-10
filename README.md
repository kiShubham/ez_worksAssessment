# EZ assessment ;

we have created a single-page web application using ReactJs. The
application should be responsive and will consist of a simple form that will be integrated with
the API provided to us `(http://34.225.132.160:8002/api)` .

---

### This app is using a proxy and have a proxy key which is on trial for 3 days , we need to update the proxy key after 3 day for free use case .

- visit [cors.sh]() to have free key

---

- Proxy is necessary because the API provided `(http://34.225.132.160:8002/api)` uses HTTP, while our application is hosted with HTTPS at `(https://ez-works-assessment.vercel.app/)`.

- Hence browser will give error , when you try to submit the email in the form , so we used proxy to run the http based api given to us;

## Why Use a Proxy?

- When you try to submit the email form in the app, the browser will block the request due to mixed content issues (HTTP API endpoint being accessed from an HTTPS site). To bypass this, we use a proxy that allows us to make HTTP requests from our HTTPS-hosted app without running into CORS issues.

### API Usage

- For a better understanding of how the proxy is set up and used, refer to the following files:

- `src/api/api.js` : Contains the API request logic using Axios 🎅 .

### API Integration Use Cases :

1. Empty Form Submission is not allowed ( Validation at Front-End )
2. Email Validation at Front-End (Validation at Front-End )
3. An error will be returned in API Response when the email ends with @ez.works. Display
   that error inside the form field.

- Sample :

1. bhavya@ez.works ---> `response code 422 'Unprocessable Entity'` ;
2. bhavya@abc.com ---> `form submitted response code 200 OK`
3. The form is submitted successfully, API will return 200 in Response, and “ Form Submitted” will be displayed in the text field.

- If an error encounter with a `response code 403 Forbidden` it means the cors proxy demo timeperiod is ended, visit again the [https://cors-anywhere.herokuapp.com/corsdemo]() and click the request button ;

## BonusPoint

### `What is CORS?`

Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers to prevent web pages from making requests to a different domain than the one that served the web page. While this policy helps protect users from malicious websites, it can also restrict legitimate requests from different origins.

To overcome this restriction, a server can include specific headers in its responses that indicate it allows requests from other origins. However, if the server you are trying to access does not include these headers, you will encounter CORS errors.
