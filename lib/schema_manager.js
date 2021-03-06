// Generated by CoffeeScript 1.9.3
(function() {
  var JSCK, SchemaManager,
    slice = [].slice;

  JSCK = require("jsck");

  module.exports = SchemaManager = (function() {
    function SchemaManager() {
      var definition, definitions, i, len, name, ref, schema, schemas;
      schemas = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      this.schemas = schemas;
      ref = this.schemas;
      for (i = 0, len = ref.length; i < len; i++) {
        schema = ref[i];
        if ((definitions = schema.definitions) != null) {
          for (name in definitions) {
            definition = definitions[name];
            definition.id || (definition.id = "#" + name);
          }
        }
      }
      this.jsck = (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(JSCK.draft3, this.schemas, function(){});
      this.uris = this.jsck.references;
    }

    SchemaManager.prototype.find = function() {
      var args, ref;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return (ref = this.jsck).find.apply(ref, args);
    };

    return SchemaManager;

  })();

}).call(this);
