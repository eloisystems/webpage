from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import resend
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://eloisystems.com"],  # restrict in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Config
resend.api_key = os.getenv("RESEND_API_KEY")
TO_EMAIL = os.getenv("TO_EMAIL")


class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str


@app.post("/contact")
async def send_email(data: ContactForm):
    try:
        resend.Emails.send({
            "from": "onboarding@resend.dev",  # MUST be verified sender
            "to": TO_EMAIL,
            "subject": data.subject,
            "reply_to": data.email,  # 👈 correct way to use user's email
            "html": f"""
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Message:</strong><br>{data.message}</p>
            """
        })
        print("DONE, SUCCESS")
        return {"success": True}

    except Exception as e:
        print("EMAIL ERROR:", e)
        return {"success": False, "error": str(e)}
