@echo off

::Э���ļ�·��, ���Ҫ����\������
set SOURCE_FOLDER=.\message

::C#������·��
::set CS_COMPILER_PATH=..\Tools\protobuf-net\ProtoGen\protogen.exe
::C#�ļ�����·��, ���Ҫ����\������
::set CS_TARGET_PATH=..\Client\Assets\Scripts\Net\Protocol

::Java������·��
set JAVA_COMPILER_PATH=.\proto\protoc.exe
::Java�ļ�����·��, ���Ҫ����\������
set JAVA_TARGET_PATH=F:\ChessGame\ConfigProtocol\message

::ɾ��֮ǰ�������ļ�
del %JAVA_TARGET_PATH%\*.* /f /s /q

for /f "delims=" %%i in ('dir /b %SOURCE_FOLDER%\*.proto') do (
    %JAVA_COMPILER_PATH% --java_out=%JAVA_TARGET_PATH% %%i
)

echo  Э��������ϡ�������

pause