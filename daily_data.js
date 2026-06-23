const DAILY_DATA = {
  "daily": {
    "date": "2026-06-22",
    "revenue": {
      "yesterday": 7585.62,
      "day_before": 3923.21,
      "delta": 0.9335,
      "avg7": 6802.4,
      "avg30": 5901.93
    },
    "register": {
      "yesterday": 336,
      "day_before": 150,
      "delta": 1.24,
      "avg7": 256,
      "avg30": 294
    },
    "new_payers": {
      "yesterday": 40,
      "day_before": 27,
      "delta": 0.4815,
      "avg7": 44,
      "avg30": 53
    },
    "new_pay_rate": {
      "yesterday": 0.119,
      "day_before": 0.18,
      "delta": -0.061,
      "avg7": 0.1748,
      "avg30": 0.2125
    },
    "summary": "营收异常(+93.4%)；注册异常(+124.0%)；新增付费异常(+48.1%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 2725.49
      },
      {
        "name": "厄洛斯",
        "val": 1230.55
      },
      {
        "name": "李航",
        "val": 848.98
      },
      {
        "name": "在水一方_JUR",
        "val": 733.52
      },
      {
        "name": "弑神阁",
        "val": 616.96
      }
    ],
    "channel_reg_top5": [
      {
        "name": "聚冠_JUR",
        "val": 45
      },
      {
        "name": "梵克雅宝",
        "val": 44
      },
      {
        "name": "殿堂网络_JUR",
        "val": 24
      },
      {
        "name": "弑神阁",
        "val": 22
      },
      {
        "name": "李航",
        "val": 21
      }
    ],
    "anomaly_channels": [
      {
        "name": "聚冠_JUR",
        "yest": 190.8,
        "before": 1082.8,
        "delta": -0.8238,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 972.96,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 763.2,
          "big_r_names": "10JC10: $955→$0(-$955), Cody: $18→$0(-$18)",
          "churn_names": "Shade0, cmdr.17005950, Doggy"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "长沙万氪_JUR",
        "yest": 5,
        "before": 15,
        "delta": -0.6667,
        "reason": "量跌"
      },
      {
        "name": "厄洛斯",
        "yest": 9,
        "before": 11,
        "delta": -0.1818,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "cmdr.25003234",
        "ucid": "16020025003234",
        "channel": "郑州未界发财_JUR",
        "server": "S25",
        "total_pay": 930.38,
        "last_login_days": 4
      },
      {
        "name": "南辞",
        "ucid": "16020024009938",
        "channel": "梵克雅宝",
        "server": "S24",
        "total_pay": 1077.95,
        "last_login_days": 3
      },
      {
        "name": "cmdr.18010155",
        "ucid": "16020018010155",
        "channel": "厄洛斯",
        "server": "S18",
        "total_pay": 500.96,
        "last_login_days": 5
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
        "last_login_days": 6
      },
      {
        "name": "cmdr.17005950",
        "ucid": "16020017005950",
        "channel": "聚冠_JUR",
        "server": "S17",
        "total_pay": 906.65,
        "last_login_days": 6
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4465.52,
        "last_login_days": 5
      },
      {
        "name": "hueS",
        "ucid": "16020015009600",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 2244.88,
        "last_login_days": 5
      },
      {
        "name": "RedGen",
        "ucid": "16020015005434",
        "channel": "郑州未界发财_JUR",
        "server": "S15",
        "total_pay": 885.85,
        "last_login_days": 4
      },
      {
        "name": "JunNyx",
        "ucid": "16020015004499",
        "channel": "厄洛斯",
        "server": "S15",
        "total_pay": 8564.41,
        "last_login_days": 3
      },
      {
        "name": "Doggy",
        "ucid": "16020015004467",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 761.78,
        "last_login_days": 5
      },
      {
        "name": "Jeeves",
        "ucid": "16020015004228",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 824.02,
        "last_login_days": 6
      },
      {
        "name": "SolarX",
        "ucid": "16020014010963",
        "channel": "厄洛斯",
        "server": "S14",
        "total_pay": 678.49,
        "last_login_days": 6
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 109.97,
        "before": 964.96,
        "delta": -0.886,
        "days": 187
      },
      {
        "name": "S12",
        "yest": 258.47,
        "before": 0.0,
        "delta": 0.0,
        "days": 167
      },
      {
        "name": "S13",
        "yest": 461.94,
        "before": 0.0,
        "delta": 0.0,
        "days": 153
      },
      {
        "name": "S14",
        "yest": 667.77,
        "before": 299.39,
        "delta": 1.2304,
        "days": 119
      },
      {
        "name": "S15",
        "yest": 4.99,
        "before": 109.97,
        "delta": -0.9546,
        "days": 91
      },
      {
        "name": "S16",
        "yest": 78.9,
        "before": 53.84,
        "delta": 0.4655,
        "days": 77
      },
      {
        "name": "S17",
        "yest": 254.82,
        "before": 5.98,
        "delta": 41.612,
        "days": 70
      },
      {
        "name": "S18",
        "yest": 106.27,
        "before": 46.93,
        "delta": 1.2644,
        "days": 63
      },
      {
        "name": "S19",
        "yest": 51.06,
        "before": 0.0,
        "delta": 0.0,
        "days": 56
      },
      {
        "name": "S20",
        "yest": 569.55,
        "before": 188.83,
        "delta": 2.0162,
        "days": 49
      },
      {
        "name": "S21",
        "yest": 85.87,
        "before": 201.75,
        "delta": -0.5744,
        "days": 42
      },
      {
        "name": "S22",
        "yest": 64.83,
        "before": 78.83,
        "delta": -0.1776,
        "days": 35
      },
      {
        "name": "S23",
        "yest": 1840.08,
        "before": 331.51,
        "delta": 4.5506,
        "days": 28
      },
      {
        "name": "S24",
        "yest": 332.75,
        "before": 169.21,
        "delta": 0.9665,
        "days": 21
      },
      {
        "name": "S25",
        "yest": 2120.4,
        "before": 354.46,
        "delta": 4.9821,
        "days": 14
      },
      {
        "name": "S26",
        "yest": 577.95,
        "before": 1107.57,
        "delta": -0.4782,
        "days": 7
      },
      {
        "name": "S27",
        "yest": NaN,
        "before": NaN,
        "delta": 0,
        "days": 0
      }
    ]
  }
};
