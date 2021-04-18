package com.ids_task_manager_app;

// requirement from react-native-splash-screen
import android.os.Bundle;

import com.facebook.react.ReactActivity;

// requirement from react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  // requirement from react-native-splash-screen
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ids_task_manager_app";
  }
}
