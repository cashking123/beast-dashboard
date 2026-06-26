const DAILY_DATA = {
  "daily": {
    "date": "2026-06-25",
    "revenue": {
      "yesterday": 6888.23,
      "day_before": 5642.53,
      "delta": 0.2208,
      "avg7": 6038.57,
      "avg30": 5975.33
    },
    "register": {
      "yesterday": 279,
      "day_before": 316,
      "delta": -0.1171,
      "avg7": 266,
      "avg30": 308
    },
    "new_payers": {
      "yesterday": 55,
      "day_before": 46,
      "delta": 0.1957,
      "avg7": 39,
      "avg30": 53
    },
    "new_pay_rate": {
      "yesterday": 0.1971,
      "day_before": 0.1456,
      "delta": 0.0516,
      "avg7": 0.154,
      "avg30": 0.1978
    },
    "summary": "营收异常(+22.1%)；注册正常(-11.7%)；新增付费异常(+19.6%)",
    "channel_rev": [
      {
        "name": "在水一方_JUR",
        "val": 1265.01
      },
      {
        "name": "梵克雅宝",
        "val": 694.29
      },
      {
        "name": "雅典娜",
        "val": 669.55
      },
      {
        "name": "厄洛斯",
        "val": 602.77
      },
      {
        "name": "广州昊天游_JUR",
        "val": 502.62
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 40
      },
      {
        "name": "聚冠_JUR",
        "val": 33
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 22
      },
      {
        "name": "雅典娜",
        "val": 21
      },
      {
        "name": "弑神阁",
        "val": 19
      }
    ],
    "anomaly_channels": [
      {
        "name": "梵克雅宝",
        "yest": 694.29,
        "before": 1519.95,
        "delta": -0.5432,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 879.77,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 694.29,
          "big_r_names": "Weiii05: $558→$20(-$538), cmdr.23008558: $200→$0(-$200), SLeonheart: $104→$0(-$104)",
          "churn_names": "无"
        }
      },
      {
        "name": "郑州未界发财_JUR",
        "yest": 187.6,
        "before": 372.04,
        "delta": -0.4958,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 311.15,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "SirRat: $311→$0(-$311)",
          "churn_names": "无"
        }
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 488.42,
        "before": 737.85,
        "delta": -0.338,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 382.99,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Sleepy: $360→$95(-$265), Caleb1437: $199→$81(-$118)",
          "churn_names": "Meru"
        }
      },
      {
        "name": "潘多拉",
        "yest": 324.59,
        "before": 489.5,
        "delta": -0.3369,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 159.98,
          "big_r_churn": 0,
          "reg_drop": 284.02,
          "quality_drop": 148.77,
          "big_r_names": "Goodamac: $337→$177(-$160)",
          "churn_names": "无"
        }
      },
      {
        "name": "殿堂网络_JUR",
        "yest": 151.35,
        "before": 207.95,
        "delta": -0.2722,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 81.51,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "Soup: $190→$108(-$82)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "广亮_JUR",
        "yest": 5,
        "before": 13,
        "delta": -0.6154,
        "reason": "量跌"
      },
      {
        "name": "香奈儿GD",
        "yest": 11,
        "before": 21,
        "delta": -0.4762,
        "reason": "量跌"
      },
      {
        "name": "精聊發發發团队",
        "yest": 5,
        "before": 9,
        "delta": -0.4444,
        "reason": "量跌"
      },
      {
        "name": "潘多拉",
        "yest": 5,
        "before": 8,
        "delta": -0.375,
        "reason": "量跌"
      },
      {
        "name": "克罗心SX",
        "yest": 12,
        "before": 19,
        "delta": -0.3684,
        "reason": "量跌"
      },
      {
        "name": "李航",
        "yest": 16,
        "before": 23,
        "delta": -0.3043,
        "reason": "量跌"
      },
      {
        "name": "殿堂网络_JUR",
        "yest": 17,
        "before": 23,
        "delta": -0.2609,
        "reason": "量跌"
      },
      {
        "name": "郑州未界发财_JUR",
        "yest": 12,
        "before": 16,
        "delta": -0.25,
        "reason": "量跌"
      },
      {
        "name": "弑神阁",
        "yest": 19,
        "before": 23,
        "delta": -0.1739,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "DMOGKarmaX",
        "ucid": "16020026003381",
        "channel": "厄洛斯",
        "server": "S26",
        "total_pay": 735.77,
        "last_login_days": 5
      },
      {
        "name": "Prince",
        "ucid": "16020022007549",
        "channel": "发财团队_JUR",
        "server": "S22",
        "total_pay": 782.92,
        "last_login_days": 6
      },
      {
        "name": "Putte",
        "ucid": "16020019005265",
        "channel": "厄洛斯",
        "server": "S19",
        "total_pay": 615.46,
        "last_login_days": 3
      },
      {
        "name": "cmdr.18010155",
        "ucid": "16020018010155",
        "channel": "厄洛斯",
        "server": "S18",
        "total_pay": 500.96,
        "last_login_days": 3
      },
      {
        "name": "Morb",
        "ucid": "16020017010825",
        "channel": "广州昊天游_JUR",
        "server": "S17",
        "total_pay": 1677.9,
        "last_login_days": 3
      },
      {
        "name": "Shade0",
        "ucid": "16020017007033",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 1635.3,
        "last_login_days": 3
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 3
      },
      {
        "name": "SiThe",
        "ucid": "16020016009669",
        "channel": "君临天下",
        "server": "S16",
        "total_pay": 3487.08,
        "last_login_days": 4
      },
      {
        "name": "Izzy",
        "ucid": "16020016008095",
        "channel": "广州昊天游_JUR",
        "server": "S16",
        "total_pay": 2241.4,
        "last_login_days": 4
      },
      {
        "name": "Meru",
        "ucid": "16020015017913",
        "channel": "新郑乐牛发财_JUR",
        "server": "S15",
        "total_pay": 720.05,
        "last_login_days": 3
      },
      {
        "name": "JunNyx",
        "ucid": "16020015004499",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 8564.41,
        "last_login_days": 6
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 9.99,
        "before": 3.98,
        "delta": 1.5101,
        "days": 190
      },
      {
        "name": "S12",
        "yest": 0.0,
        "before": 9.99,
        "delta": -1.0,
        "days": 170
      },
      {
        "name": "S13",
        "yest": 0.0,
        "before": 47.49,
        "delta": -1.0,
        "days": 156
      },
      {
        "name": "S14",
        "yest": 100.84,
        "before": 303.83,
        "delta": -0.6681,
        "days": 122
      },
      {
        "name": "S15",
        "yest": 98.93,
        "before": 311.15,
        "delta": -0.6821,
        "days": 94
      },
      {
        "name": "S16",
        "yest": 83.92,
        "before": 76.89,
        "delta": 0.0914,
        "days": 80
      },
      {
        "name": "S17",
        "yest": 23.94,
        "before": 98.65,
        "delta": -0.7573,
        "days": 73
      },
      {
        "name": "S18",
        "yest": 197.06,
        "before": 161.52,
        "delta": 0.22,
        "days": 66
      },
      {
        "name": "S19",
        "yest": 14.97,
        "before": 26.96,
        "delta": -0.4447,
        "days": 59
      },
      {
        "name": "S20",
        "yest": 1248.13,
        "before": 443.86,
        "delta": 1.812,
        "days": 52
      },
      {
        "name": "S21",
        "yest": 1223.57,
        "before": 341.41,
        "delta": 2.5839,
        "days": 45
      },
      {
        "name": "S22",
        "yest": 250.22,
        "before": 213.71,
        "delta": 0.1708,
        "days": 38
      },
      {
        "name": "S23",
        "yest": 630.02,
        "before": 1096.73,
        "delta": -0.4255,
        "days": 31
      },
      {
        "name": "S24",
        "yest": 582.19,
        "before": 568.6,
        "delta": 0.0239,
        "days": 24
      },
      {
        "name": "S25",
        "yest": 1101.58,
        "before": 869.2,
        "delta": 0.2673,
        "days": 17
      },
      {
        "name": "S26",
        "yest": 739.2,
        "before": 640.28,
        "delta": 0.1545,
        "days": 10
      },
      {
        "name": "S27",
        "yest": 580.69,
        "before": 428.28,
        "delta": 0.3559,
        "days": 3
      }
    ]
  }
};
