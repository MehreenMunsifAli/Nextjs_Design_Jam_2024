import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconType {
    Icon: IconType;
    id?: number;
    Url: string;
    Color?: string;
    Text?: number;
    BgColor?: string;
    Padding?: number;
    Radius?: number;
}

export default function SocialIcon({Icon, Url, Color = '#4F4F4F', Text = 16, BgColor = 'white', Padding = 4, Radius = 2 }: SocialIconType) {

    return(
        <div style={{padding: Padding, borderRadius: Radius, backgroundColor: BgColor}}>
            <Link href={Url} target="_blank" rel="noopener noreferrer">
                <Icon style={{ fontSize: Text, color: Color}} />
            </Link>
        </div>
    )
}