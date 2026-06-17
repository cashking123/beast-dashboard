const DAILY_DATA = {
  "daily": {
    "date": "2026-06-16",
    "revenue": {
      "yesterday": 8621.49,
      "day_before": 7013.46,
      "delta": 0.2293,
      "avg7": 6776.45,
      "avg30": 5451.68
    },
    "register": {
      "yesterday": 320,
      "day_before": 333,
      "delta": -0.039,
      "avg7": 331,
      "avg30": 300
    },
    "new_payers": {
      "yesterday": 65,
      "day_before": 53,
      "delta": 0.2264,
      "avg7": 56,
      "avg30": 54
    },
    "new_pay_rate": {
      "yesterday": 0.2031,
      "day_before": 0.1592,
      "delta": 0.044,
      "avg7": 0.2095,
      "avg30": 0.214
    },
    "summary": "营收异常(+22.9%)；注册正常(-3.9%)；新增付费异常(+22.6%)",
    "channel_rev": [
      {
        "name": "梵克雅宝",
        "val": 1800.0
      },
      {
        "name": "厄洛斯",
        "val": 1535.48
      },
      {
        "name": "李航",
        "val": 791.65
      },
      {
        "name": "聚冠_JUR",
        "val": 631.51
      },
      {
        "name": "新郑乐牛发财_JUR",
        "val": 589.13
      }
    ],
    "channel_reg_top5": [
      {
        "name": "梵克雅宝",
        "val": 32
      },
      {
        "name": "聚冠_JUR",
        "val": 31
      },
      {
        "name": "郑州未界发财_JUR",
        "val": 25
      },
      {
        "name": "李航",
        "val": 23
      },
      {
        "name": "厄洛斯",
        "val": 22
      }
    ],
    "anomaly_channels": [
      {
        "name": "雅典娜",
        "yest": 226.12,
        "before": 1073.78,
        "delta": -0.7894,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1019.88,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "cmdr.23005794: $1020→$0(-$1020)",
          "churn_names": "无"
        }
      },
      {
        "name": "聚冠_JUR",
        "yest": 631.51,
        "before": 1588.42,
        "delta": -0.6024,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 1092.95,
          "big_r_churn": 0,
          "reg_drop": 176.24,
          "quality_drop": 0,
          "big_r_names": "10JC10: $1050→$200(-$850), Bubble: $119→$0(-$119), cmdr.20009203: $100→$0(-$100)",
          "churn_names": "cmdr.16011067, Colera, cmdr.14003231"
        }
      },
      {
        "name": "laoxia_JUR",
        "yest": 112.82,
        "before": 234.59,
        "delta": -0.5191,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 0,
          "big_r_churn": 0,
          "reg_drop": 306.79,
          "quality_drop": 0,
          "big_r_names": "无",
          "churn_names": "无"
        }
      },
      {
        "name": "在水一方_JUR",
        "yest": 499.44,
        "before": 602.5,
        "delta": -0.1711,
        "reason_detail": {
          "type": "mixed",
          "big_r_stop": 112.04,
          "big_r_churn": 0,
          "reg_drop": 0,
          "quality_drop": 0,
          "big_r_names": "MoeLester: $389→$291(-$98), Viking: $33→$19(-$14)",
          "churn_names": "无"
        }
      }
    ],
    "reg_anomaly_channels": [
      {
        "name": "laoxia_JUR",
        "yest": 7,
        "before": 38,
        "delta": -0.8158,
        "reason": "量跌"
      },
      {
        "name": "新郑乐牛发财_JUR",
        "yest": 9,
        "before": 13,
        "delta": -0.3077,
        "reason": "量跌"
      },
      {
        "name": "聚冠_JUR",
        "yest": 31,
        "before": 43,
        "delta": -0.2791,
        "reason": "量跌"
      },
      {
        "name": "弑神阁",
        "yest": 20,
        "before": 27,
        "delta": -0.2593,
        "reason": "量跌"
      },
      {
        "name": "梵克雅宝",
        "yest": 32,
        "before": 41,
        "delta": -0.2195,
        "reason": "量跌"
      }
    ],
    "churn_alert": [
      {
        "name": "LAWDAWG",
        "ucid": "16020021004111",
        "channel": "广亮_JUR",
        "server": "S21",
        "total_pay": 970.34,
        "last_login_days": 6
      },
      {
        "name": "21Epic",
        "ucid": "16020021003323",
        "channel": "长沙哈迪斯_JUR",
        "server": "S21",
        "total_pay": 702.46,
        "last_login_days": 4
      },
      {
        "name": "XXX",
        "ucid": "16020017007289",
        "channel": "厄洛斯",
        "server": "S17",
        "total_pay": 654.17,
        "last_login_days": 6
      },
      {
        "name": "cmdr.17005701",
        "ucid": "16020017005701",
        "channel": "RS_JUR",
        "server": "S17",
        "total_pay": 655.12,
        "last_login_days": 6
      },
      {
        "name": "ClIx",
        "ucid": "16020017003303",
        "channel": "郑州未界发财_JUR",
        "server": "S17",
        "total_pay": 4085.53,
        "last_login_days": 5
      },
      {
        "name": "Anakin",
        "ucid": "16020016011136",
        "channel": "天津简游发财_JUR",
        "server": "S16",
        "total_pay": 1409.07,
        "last_login_days": 4
      },
      {
        "name": "cmdr.16011067",
        "ucid": "16020016011067",
        "channel": "聚冠_JUR",
        "server": "S16",
        "total_pay": 785.94,
        "last_login_days": 4
      },
      {
        "name": "Colera",
        "ucid": "16020015010527",
        "channel": "聚冠_JUR",
        "server": "S15",
        "total_pay": 1041.23,
        "last_login_days": 5
      },
      {
        "name": "Khey",
        "ucid": "16020015004082",
        "channel": "广州昊天游_JUR",
        "server": "S15",
        "total_pay": 3075.31,
        "last_login_days": 6
      },
      {
        "name": "cmdr.14003231",
        "ucid": "16020014003231",
        "channel": "聚冠_JUR",
        "server": "S14",
        "total_pay": 1272.17,
        "last_login_days": 4
      }
    ],
    "server_rev": [
      {
        "name": "S11",
        "yest": 232.9,
        "before": 1186.92,
        "delta": -0.8038,
        "days": 181
      },
      {
        "name": "S12",
        "yest": 45.95,
        "before": 19.96,
        "delta": 1.3021,
        "days": 161
      },
      {
        "name": "S13",
        "yest": 648.82,
        "before": 206.41,
        "delta": 2.1434,
        "days": 147
      },
      {
        "name": "S14",
        "yest": 343.32,
        "before": 388.95,
        "delta": -0.1173,
        "days": 113
      },
      {
        "name": "S15",
        "yest": 18.95,
        "before": 20.97,
        "delta": -0.0963,
        "days": 85
      },
      {
        "name": "S16",
        "yest": 32.93,
        "before": 94.87,
        "delta": -0.6529,
        "days": 71
      },
      {
        "name": "S17",
        "yest": 300.98,
        "before": 182.15,
        "delta": 0.6524,
        "days": 64
      },
      {
        "name": "S18",
        "yest": 177.82,
        "before": 110.56,
        "delta": 0.6084,
        "days": 57
      },
      {
        "name": "S19",
        "yest": 329.68,
        "before": 30.13,
        "delta": 9.9419,
        "days": 50
      },
      {
        "name": "S20",
        "yest": 519.51,
        "before": 703.68,
        "delta": -0.2617,
        "days": 43
      },
      {
        "name": "S21",
        "yest": 532.71,
        "before": 166.78,
        "delta": 2.1941,
        "days": 36
      },
      {
        "name": "S22",
        "yest": 260.64,
        "before": 112.87,
        "delta": 1.3092,
        "days": 29
      },
      {
        "name": "S23",
        "yest": 1702.79,
        "before": 1802.79,
        "delta": -0.0555,
        "days": 22
      },
      {
        "name": "S24",
        "yest": 1371.81,
        "before": 510.82,
        "delta": 1.6855,
        "days": 15
      },
      {
        "name": "S25",
        "yest": 1511.83,
        "before": 1473.61,
        "delta": 0.0259,
        "days": 8
      },
      {
        "name": "S26",
        "yest": 580.87,
        "before": 0.0,
        "delta": 0.0,
        "days": 1
      }
    ]
  }
};
