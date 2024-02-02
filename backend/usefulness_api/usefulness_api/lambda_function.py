import json
import time

import boto3
from botocore.config import Config

RATING_TABLE_NAME = "documentation-usefulness-rating"

table_client = boto3.resource(
    "dynamodb",
    config=Config(
        retries={
            "total_max_attempts": 5,
            "mode": "standard",
        }
    ),
).Table(RATING_TABLE_NAME)


def lambda_handler(event, context):
    payload = json.loads(event["body"])
    sub_page = payload["sub_page"]
    rating = payload["rating"]
    timestamp = str(time.time())
    table_client.put_item(
        Item={
            "timestamp": timestamp,
            "rating": rating,
            "sub_page": sub_page,
        }
    )
    return {"statusCode": 200}
