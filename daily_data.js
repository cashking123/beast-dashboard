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
      "yesterday": 268,
      "day_before": 314,
      "delta": -0.1465,
      "avg7": 222,
      "avg30": 52
    },
    "new_payers": {
      "yesterday": 47,
      "day_before": 40,
      "delta": 0.175,
      "avg7": 23,
      "avg30": 5
    },
    "new_pay_rate": {
      "yesterday": 0.1754,
      "day_before": 0.1274,
      "delta": 0.048,
      "avg7": 0.0867,
      "avg30": 0.0202
    },
    "summary": "营收异常(+22.1%)；注册正常(-14.6%)；新增付费异常(+17.5%)",
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
        "name": "雅典娜",
        "val": 21
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 18
      },
      {
        "name": "弑神阁",
        "val": 18
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
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 694.29,
          "big_r_names": "无",
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
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "无",
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
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "无",
          "churn_names": "无"
        }
      },
      {
        "name": "潘多拉",
        "yest": 324.59,
        "before": 489.5,
        "delta": -0.3369,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 284.02,
          "quality_drop": 148.77,
          "big_r_names": "无",
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
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "无",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
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
        "name": "李航",
        "yest": 14,
        "before": 23,
        "delta": -0.3913,
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
        "yest": 18,
        "before": 23,
        "delta": -0.2174,
        "reason": "量跌"
      }
    ],
    "churn_alert": [],
    "server_rev": [
      {
        "name": "S11",
        "yest": 9.99,
        "before": 3.98,
        "delta": 1.5101,
        "days": 6
      },
      {
        "name": "S12",
        "yest": 0.0,
        "before": 9.99,
        "delta": -1.0,
        "days": 2
      },
      {
        "name": "S13",
        "yest": 0.0,
        "before": 47.49,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S14",
        "yest": 100.84,
        "before": 303.83,
        "delta": -0.6681,
        "days": 2
      },
      {
        "name": "S15",
        "yest": 98.93,
        "before": 311.15,
        "delta": -0.6821,
        "days": 1
      },
      {
        "name": "S16",
        "yest": 83.92,
        "before": 76.89,
        "delta": 0.0914,
        "days": 7
      },
      {
        "name": "S17",
        "yest": 23.94,
        "before": 98.65,
        "delta": -0.7573,
        "days": 3
      },
      {
        "name": "S18",
        "yest": 197.06,
        "before": 161.52,
        "delta": 0.22,
        "days": 6
      },
      {
        "name": "S19",
        "yest": 14.97,
        "before": 26.96,
        "delta": -0.4447,
        "days": 0
      },
      {
        "name": "S20",
        "yest": 1248.13,
        "before": 443.86,
        "delta": 1.812,
        "days": 7
      },
      {
        "name": "S21",
        "yest": 1223.57,
        "before": 341.41,
        "delta": 2.5839,
        "days": 7
      },
      {
        "name": "S22",
        "yest": 250.22,
        "before": 213.71,
        "delta": 0.1708,
        "days": 1
      },
      {
        "name": "S23",
        "yest": 630.02,
        "before": 1096.73,
        "delta": -0.4255,
        "days": 6
      },
      {
        "name": "S24",
        "yest": 582.19,
        "before": 568.6,
        "delta": 0.0239,
        "days": 6
      },
      {
        "name": "S25",
        "yest": 1101.58,
        "before": 869.2,
        "delta": 0.2673,
        "days": 7
      },
      {
        "name": "S26",
        "yest": 739.2,
        "before": 640.28,
        "delta": 0.1545,
        "days": 7
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
