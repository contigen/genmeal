import { Button } from '&/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '&/components/ui/card'
import { Input } from '&/components/ui/input'
import { Label } from '&/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '&/components/ui/select'
import { Switch } from '&/components/ui/switch'

export default function SettingsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-blue-600 mb-6'>Settings</h1>
      <div className='space-y-6'>
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Update your account details</CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' placeholder='Your Name' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='your.email@example.com'
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Goals</CardTitle>
            <CardDescription>
              Update your health and fitness goals
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='goal'>Primary Goal</Label>
              <Select>
                <SelectTrigger id='goal'>
                  <SelectValue placeholder='Select a goal' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='weight-loss'>Weight Loss</SelectItem>
                  <SelectItem value='muscle-gain'>Muscle Gain</SelectItem>
                  <SelectItem value='maintenance'>Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='space-y-2'>
              <Label htmlFor='activity-level'>Activity Level</Label>
              <Select>
                <SelectTrigger id='activity-level'>
                  <SelectValue placeholder='Select activity level' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='sedentary'>Sedentary</SelectItem>
                  <SelectItem value='lightly-active'>Lightly Active</SelectItem>
                  <SelectItem value='moderately-active'>
                    Moderately Active
                  </SelectItem>
                  <SelectItem value='very-active'>Very Active</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Update Goals</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dietary Preferences</CardTitle>
            <CardDescription>
              Customize your meal plan preferences
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='vegetarian'>Vegetarian</Label>
              <Switch id='vegetarian' />
            </div>
            <div className='flex items-center justify-between'>
              <Label htmlFor='gluten-free'>Gluten-Free</Label>
              <Switch id='gluten-free' />
            </div>
            <div className='flex items-center justify-between'>
              <Label htmlFor='dairy-free'>Dairy-Free</Label>
              <Switch id='dairy-free' />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-between'>
              <Label htmlFor='email-notifications'>Email Notifications</Label>
              <Switch id='email-notifications' />
            </div>
            <div className='flex items-center justify-between'>
              <Label htmlFor='push-notifications'>Push Notifications</Label>
              <Switch id='push-notifications' />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
