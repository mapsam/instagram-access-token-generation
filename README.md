instagram-access-token-generation
=================================

How to get an access token for Instagram API data retrieval

Instagram doesn't make it easy to get an access token for simple client-side API work. Though it makes sense, it's not very efficient if you're just simply trying to pull a feed into your page of your own photos. The API is built for application developers, while I simply just need some super awezome photos with filters on my website.

##Register your client

**Register a client** at [instagram's developer center](http://instagram.com/developer). You'll need to provide a **website URL** and a **redirect URI**, which can be the same thing for all intensive purposes. You'll be given a **client id** and a **client secret**, which you'll use in the next steps. 

##Obtain code key

In a browser, enter the following URL with the appropriate fields replaced with your info:

```
https://api.instagram.com/oauth/authorize/?client_id=[clientID]&redirect_uri=[redirectURI]&response_type=code
```

You'll be directed to your redirect URI, and in the URL space you will see your website domain plus a parameter called **code** - copy the code value and save it somewhere.

##CURL for JSON and access_token

Next, use `curl` to generate a JSON response from Instagram. You'll have to replace the appropriate fields with your information:

```
curl -F 'client_id=[clientID]' -F 'client_secret=[clientSecret]' -F 'grant_type=authorization_code' -F 'redirect_uri=[redirectURI]' -F 'code=[code]' https://api.instagram.com/oauth/access_token
```

In your response, you'll see `{"access_token":"[YOUR ACCESS TOKEN]","user":{ ...` where YOUR ACCESS TOKEN is what you'll need in retrieving JSON information form Instagram's API to use in your website. 

##Enjoy!

Take a look at the [example ajax request](https://github.com/svmatthews/instagram-access-token-generation/tree/master/example) to see how to use your client keys and access tokens for simple user calls. 
