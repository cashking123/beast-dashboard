const DAILY_DATA = {
  "daily": {
    "date": "2026-06-30",
    "revenue": {
      "yesterday": 8893.51,
      "day_before": 6613.39,
      "delta": 0.3448,
      "avg7": 6605.06,
      "avg30": 6297.61
    },
    "register": {
      "yesterday": 26,
      "day_before": 48,
      "delta": -0.4583,
      "avg7": 28,
      "avg30": 7
    },
    "new_payers": {
      "yesterday": 39,
      "day_before": 43,
      "delta": -0.093,
      "avg7": 26,
      "avg30": 6
    },
    "new_pay_rate": {
      "yesterday": 1.5,
      "day_before": 0.8958,
      "delta": 0.6042,
      "avg7": 0.9928,
      "avg30": 0.2316
    },
    "summary": "营收异常(+34.5%)；注册异常(-45.8%)；新增付费正常(-9.3%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 2454.41
      },
      {
        "name": "聚冠_JUR",
        "val": 1338.59
      },
      {
        "name": "厄洛斯",
        "val": 894.36
      },
      {
        "name": "精聊發發發团队",
        "val": 665.87
      },
      {
        "name": "李航",
        "val": 607.66
      }
    ],
    "channel_reg_top5": [
      {
        "name": "厄洛斯",
        "val": 3
      },
      {
        "name": "梵克雅宝",
        "val": 3
      },
      {
        "name": "雅典娜",
        "val": 3
      },
      {
        "name": "恕瑞玛",
        "val": 3
      },
      {
        "name": "聚冠_JUR",
        "val": 2
      }
    ],
    "anomaly_channels": [
      {
        "name": "巴黎世家2",
        "yest": 249.92,
        "before": 1102.72,
        "delta": -0.7734,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 851.81,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.27004536: $1102→$250(-$852)",
          "churn_names": "无"
        }
      },
      {
        "name": "潘多拉",
        "yest": 162.88,
        "before": 245.87,
        "delta": -0.3375,
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
        "name": "厄洛斯",
        "yest": 894.36,
        "before": 1054.11,
        "delta": -0.1515,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 447.18,
          "big_r_names": "无",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [],
    "churn_alert": [],
    "server_rev": [
      {
        "name": "S11",
        "yest": 229.9,
        "before": 69.98,
        "delta": 2.2852,
        "days": 0
      },
      {
        "name": "S12",
        "yest": 474.95,
        "before": 31.95,
        "delta": 13.8654,
        "days": 0
      },
      {
        "name": "S13",
        "yest": 114.95,
        "before": 338.92,
        "delta": -0.6608,
        "days": 0
      },
      {
        "name": "S14",
        "yest": 383.82,
        "before": 600.89,
        "delta": -0.3612,
        "days": 0
      },
      {
        "name": "S15",
        "yest": 0.0,
        "before": 37.96,
        "delta": -1.0,
        "days": 0
      },
      {
        "name": "S16",
        "yest": 104.92,
        "before": 181.89,
        "delta": -0.4232,
        "days": 0
      },
      {
        "name": "S17",
        "yest": 24.97,
        "before": 147.77,
        "delta": -0.831,
        "days": 0
      },
      {
        "name": "S18",
        "yest": 76.91,
        "before": 155.89,
        "delta": -0.5066,
        "days": 0
      },
      {
        "name": "S19",
        "yest": 19.97,
        "before": 67.93,
        "delta": -0.706,
        "days": 0
      },
      {
        "name": "S20",
        "yest": 331.77,
        "before": 124.97,
        "delta": 1.6548,
        "days": 0
      },
      {
        "name": "S21",
        "yest": 164.94,
        "before": 213.88,
        "delta": -0.2288,
        "days": 0
      },
      {
        "name": "S22",
        "yest": 413.78,
        "before": 440.88,
        "delta": -0.0615,
        "days": 0
      },
      {
        "name": "S23",
        "yest": 393.77,
        "before": 409.29,
        "delta": -0.0379,
        "days": 0
      },
      {
        "name": "S24",
        "yest": 971.72,
        "before": 296.91,
        "delta": 2.2728,
        "days": 0
      },
      {
        "name": "S25",
        "yest": 1516.43,
        "before": 632.4,
        "delta": 1.3979,
        "days": 0
      },
      {
        "name": "S26",
        "yest": 1038.52,
        "before": 457.92,
        "delta": 1.2679,
        "days": 6
      },
      {
        "name": "S27",
        "yest": 2238.1,
        "before": 2260.58,
        "delta": -0.0099,
        "days": 7
      },
      {
        "name": "S28",
        "yest": 394.09,
        "before": 143.38,
        "delta": 1.7486,
        "days": 2
      }
    ]
  }
};
