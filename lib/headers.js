// Generated by CoffeeScript 1.9.3
(function() {
  var parse_www_auth, www_auth_regex,
    slice = [].slice;

  www_auth_regex = /([^\s,]+)="?([^\s,"]+)"?/;

  parse_www_auth = function(string) {
    var arrays, challenge, challenges, current, full, i, j, k, key, len, len1, len2, match, name, pair, pairs, params, token, tokens, value;
    arrays = [];
    current = null;
    tokens = string.split(" ");
    for (i = 0, len = tokens.length; i < len; i++) {
      token = tokens[i];
      if (token.indexOf("=") !== -1) {
        current.push(token);
      } else {
        current = [token];
        arrays.push(current);
      }
    }
    challenges = {};
    for (j = 0, len1 = arrays.length; j < len1; j++) {
      challenge = arrays[j];
      name = challenge[0], pairs = 2 <= challenge.length ? slice.call(challenge, 1) : [];
      if (pairs.length === 0) {
        throw new Error("Invalid WWW-Authenticate header");
      }
      params = challenges[name] = {};
      for (k = 0, len2 = pairs.length; k < len2; k++) {
        pair = pairs[k];
        match = www_auth_regex.exec(pair);
        if (match != null) {
          full = match[0], key = match[1], value = match[2];
          params[key] = value;
        } else {
          throw new Error("Invalid WWW-Authenticate header");
        }
      }
    }
    return challenges;
  };

  module.exports = {
    parse_www_auth: parse_www_auth
  };

}).call(this);
