import { LambdaLoggerFactory } from "../src/index";
import CustomError from "./lib/CustomError";
import * as util from "util";
import { LogLevel } from "../src/LogLevel";

describe("LambdaLogger", () => {
  it("should be able to output Emergency logs", () => {
    const error = new CustomError("should be able to output Emergency logs");
    error.optionalObject = {
      list: [1, 2, 3, 4],
      object: {
        title: "test",
        price: 3000,
        user: {
          id: 999,
          name: "keita"
        }
      },
      func: (value: number) => {
        return value * 3;
      }
    };

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.emergency(error);

    const expectedContext = `EMERGENCY \n ${util.inspect(error, false, null)}`;

    expect(logOutput.logLevel).toBe("EMERGENCY");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Alert logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.alert(message);

    const expectedContext = `ALERT \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ALERT");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Critical logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.critical(message);

    const expectedContext = `CRITICAL \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("CRITICAL");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Error logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.error(message);

    const expectedContext = `ERROR \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("ERROR");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Warning logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.warning(message);

    const expectedContext = `WARNING \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("WARNING");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Notice logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.notice(message);

    const expectedContext = `NOTICE \n ${util.inspect(message, false, null)}`;

    expect(logOutput.logLevel).toBe("NOTICE");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Informational logs", () => {
    const message = "hello";

    const lambdaLogger = LambdaLoggerFactory.create(LogLevel.DEBUG, "", "");
    const logOutput = lambdaLogger.informational(message);

    const expectedContext = `INFORMATIONAL \n ${util.inspect(
      message,
      false,
      null
    )}`;

    expect(logOutput.logLevel).toBe("INFORMATIONAL");
    expect(logOutput.context).toBe(expectedContext);
  });

  it("should be able to output Debug logs", () => {
    const messages = ["hello", "world"];

    const lambdaLogger = LambdaLoggerFactory.create(
      LogLevel.INFORMATIONAL,
      "",
      ""
    );
    const logOutput = lambdaLogger.debug(messages);

    const expectedContext = `DEBUG \n ${util.inspect(messages, false, null)}`;

    expect(logOutput.logLevel).toBe("DEBUG");
    expect(logOutput.context).toBe(expectedContext);
  });
});
