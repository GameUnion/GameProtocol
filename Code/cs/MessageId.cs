// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: MessageId.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
/// <summary>Holder for reflection information generated from MessageId.proto</summary>
public static partial class MessageIdReflection {

  #region Descriptor
  /// <summary>File descriptor for MessageId.proto</summary>
  public static pbr::FileDescriptor Descriptor {
    get { return descriptor; }
  }
  private static pbr::FileDescriptor descriptor;

  static MessageIdReflection() {
    byte[] descriptorData = global::System.Convert.FromBase64String(
        string.Concat(
          "Cg9NZXNzYWdlSWQucHJvdG8qTQoHR01Nc2dJZBINCglHbVVua25vd24QABIY",
          "ChJDbG9zZVNlcnZlclJlcXVlc3QQqaIMEhkKE0Nsb3NlU2VydmVyUmVzcG9u",
          "c2UQqqIMKkUKCVVzZXJNc2dJZBIPCgtVc2VyVW5rbm93bhAAEhIKDExvZ2lu",
          "UmVxdWVzdBCJlQYSEwoNTG9naW5SZXNwb25zZRCKlQZCKgomaW5mby54aWFv",
          "bW8uc2VydmVyLnNoYXJlZC5wcm90b2NvbC5tc2dQAWIGcHJvdG8z"));
    descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
        new pbr::FileDescriptor[] { },
        new pbr::GeneratedClrTypeInfo(new[] {typeof(global::GMMsgId), typeof(global::UserMsgId), }, null, null));
  }
  #endregion

}
#region Enums
public enum GMMsgId {
  [pbr::OriginalName("GmUnknown")] GmUnknown = 0,
  [pbr::OriginalName("CloseServerRequest")] CloseServerRequest = 201001,
  [pbr::OriginalName("CloseServerResponse")] CloseServerResponse = 201002,
}

public enum UserMsgId {
  [pbr::OriginalName("UserUnknown")] UserUnknown = 0,
  [pbr::OriginalName("LoginRequest")] LoginRequest = 101001,
  [pbr::OriginalName("LoginResponse")] LoginResponse = 101002,
}

#endregion


#endregion Designer generated code