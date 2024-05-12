import RNFS from 'react-native-fs';

async function createLog(logData: string) {
  const directoryPath = RNFS.DownloadDirectoryPath + '/Logs';
  console.log(directoryPath);
  const filePath = directoryPath + '/log.txt';
  try {
    await RNFS.mkdir(directoryPath);
    RNFS.writeFile(filePath, `{${logData}}` + '\n', 'utf8');
    console.log('File Created Successfully');
  } catch (error) {
    console.error('Error writing log to file:', error);
  }
}

async function logError(logData: string) {
  const directoryPath = RNFS.DownloadDirectoryPath + '/Logs';
  const filePath = directoryPath + '/log.txt';
  try {
    await RNFS.appendFile(filePath, `[ERROR]: ${logData}\n`, 'utf8');
    console.log('error');
  } catch (error) {
    console.error('Error writing log to file:', error);
  }
}

async function logInfo(logData: string) {
  const directoryPath = RNFS.DownloadDirectoryPath + '/Logs';
  const filePath = directoryPath + '/log.txt';
  try {
    await RNFS.appendFile(filePath, `[INFO]: ${logData}\n`, 'utf8');
    console.log('info');
  } catch (error) {
    console.error('Error writing log to file:', error);
  }
}

async function logWarn(logData: string) {
  const directoryPath = RNFS.DownloadDirectoryPath + '/Logs';
  const filePath = directoryPath + '/log.txt';
  try {
    await RNFS.appendFile(filePath, `[WARN]: ${logData}\n`, 'utf8');
    console.log('warn');
  } catch (error) {
    console.error('Error writing log to file:', error);
  }
}

export {createLog, logError, logInfo, logWarn};
