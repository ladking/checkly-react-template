import { EmailAlertChannel } from "checkly/constructs";

interface EmailAlertParams {
  sendFailure: boolean;
  sendRecovery: boolean;
  sendDegraded: boolean;
}

export const createEmailAlert = (
  params: EmailAlertParams,
  email: string
): EmailAlertChannel => {
  return new EmailAlertChannel("email-channel-1", {
    address: email,
    ...params,
  });
};
