// source: user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.user.LoginResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.user.RoleInfo');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.user.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.user.LoginResponse.repeatedFields_, null);
};
goog.inherits(proto.user.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.user.LoginResponse.displayName = 'proto.user.LoginResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.user.LoginResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.user.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.user.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.user.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolelistList: jspb.Message.toObjectList(msg.getRolelistList(),
    proto.user.RoleInfo.toObject, includeInstance),
    userid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.user.LoginResponse}
 */
proto.user.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.user.LoginResponse;
  return proto.user.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.user.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.user.LoginResponse}
 */
proto.user.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.user.RoleInfo;
      reader.readMessage(value,proto.user.RoleInfo.deserializeBinaryFromReader);
      msg.addRolelist(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.user.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.user.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.user.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.user.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.user.RoleInfo.serializeBinaryToWriter
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated RoleInfo roleList = 1;
 * @return {!Array<!proto.user.RoleInfo>}
 */
proto.user.LoginResponse.prototype.getRolelistList = function() {
  return /** @type{!Array<!proto.user.RoleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.user.RoleInfo, 1));
};


/**
 * @param {!Array<!proto.user.RoleInfo>} value
 * @return {!proto.user.LoginResponse} returns this
*/
proto.user.LoginResponse.prototype.setRolelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.user.RoleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.user.RoleInfo}
 */
proto.user.LoginResponse.prototype.addRolelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.user.RoleInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.user.LoginResponse} returns this
 */
proto.user.LoginResponse.prototype.clearRolelistList = function() {
  return this.setRolelistList([]);
};


/**
 * optional int64 userId = 2;
 * @return {number}
 */
proto.user.LoginResponse.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.user.LoginResponse} returns this
 */
proto.user.LoginResponse.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


