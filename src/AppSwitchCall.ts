import { AuthRequest } from "@etsoo/appscript";
import { AppData } from "./dto/app/AppData";
import { ICoreServiceApp } from "./ICoreServiceApp";

/**
 * Switch to another app
 * @param app App
 * @param appData App data
 */
export async function AppSwitchCall(app: ICoreServiceApp, appData: AppData) {
  /*
  // Method 1, get the login URL and redirect
  const tasks = appData.urls.map((u) =>
    app.core.authApi.getLogInUrl(
      "APP",
      { showLoading: false, onError: () => false },
      u.api
    )
  );

  const result = await Promise.allSettled(tasks);
  const success = result.find(
    (r) => r.status === "fulfilled" && r.value != null
  ) as PromiseFulfilledResult<string> | undefined;
  if (success) {
    app.clearSession();
    app.loadUrlEx(success.value);
  } else {
    app.notifier.alert(app.get("networkFailure"));
  }
*/

  // Method 2, get the RequestAuth, sign in and redirect
  const tasks = appData.urls.map((u) =>
    app.core.authApi.getAuthRequest(
      "APP",
      { showLoading: false, onError: () => false },
      u.api
    )
  );

  const result = await Promise.allSettled(tasks);
  const success = result.find(
    (r) => r.status === "fulfilled" && r.value != null
  ) as PromiseFulfilledResult<AuthRequest> | undefined;
  if (success) {
    const url = await app.core.authApi.authRequest(success.value);
    if (url) {
      app.clearSession();
      app.loadUrlEx(url);
      return;
    }
  }

  app.notifier.alert(app.get("networkFailure"));
}
