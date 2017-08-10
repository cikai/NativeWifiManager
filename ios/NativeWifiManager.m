//
//  NativeWifiManager.m
//  NativeWifiManager
//
//  Created by 慈凯 on 2017/8/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "NativeWifiManager.h"

@implementation NativeWifiManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name)
{
  NSURL *url = [NSURL URLWithString:UIApplicationOpenSettingsURLString];
  dispatch_async(dispatch_get_main_queue(), ^{
    if ([[UIApplication sharedApplication] canOpenURL:url]) {
      [[UIApplication sharedApplication] openURL:url];
    } else {
      RCTLogInfo(@"打开失败");
    }
  });
}

@end
