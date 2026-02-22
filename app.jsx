const {
    ThemeProvider,
    createTheme,
    CssBaseline,
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Paper,
    Grid,
    Card,
    CardContent,
    CardActions,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Avatar,
    Badge,
    Tooltip,
    Divider,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Rating,
    LinearProgress,
    Alert,
    Snackbar
} = MaterialUI;

const {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip: RechartsTooltip,
    Legend,
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} = Recharts;

// Theme Configuration
const theme = createTheme({
    palette: {
        primary: { main: '#1976d2', light: '#42a5f5', dark: '#1565c0' },
        secondary: { main: '#dc004e', light: '#ff5983', dark: '#9a0036' },
        background: { default: '#f5f7fa', paper: '#ffffff' },
        success: { main: '#2e7d32', light: '#4caf50' },
        warning: { main: '#ed6c02', light: '#ff9800' }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 600 },
        h5: { fontWeight: 600 },
        h6: { fontWeight: 500 }
    }
});

// Mock Data
const MOCK_COURSES = [
    { id: 1, name: 'Advanced Mathematics', instructor: 'Dr. Sarah Johnson', department: 'Mathematics', semester: 'Fall 2024', students: 45 },
    { id: 2, name: 'Computer Science 101', instructor: 'Prof. Michael Chen', department: 'Computer Science', semester: 'Fall 2024', students: 120 },
    { id: 3, name: 'English Literature', instructor: 'Dr. Emily Williams', department: 'Humanities', semester: 'Fall 2024', students: 30 },
    { id: 4, name: 'Physics II', instructor: 'Dr. Robert Brown', department: 'Physics', semester: 'Fall 2024', students: 55 }
];

const MOCK_FORMS = [
    {
        id: 1,
        courseId: 1,
        title: 'Mathematics Course Evaluation',
        status: 'active',
        questions: [
            { id: 1, type: 'rating', text: 'How would you rate the course content?', max: 5 },
            { id: 2, type: 'rating', text: 'How effective was the instructor?', max: 5 },
            { id: 3, type: 'text', text: 'What improvements would you suggest?' },
            { id: 4, type: 'multiple', text: 'Which topics were most challenging?', options: ['Calculus', 'Algebra', 'Geometry', 'Statistics'] }
        ],
        responses: 32,
        avgRating: 4.2
    },
    {
        id: 2,
        courseId: 2,
        title: 'CS101 Mid-Semester Feedback',
        status: 'active',
        questions: [
            { id: 1, type: 'rating', text: 'Rate the programming assignments difficulty', max: 5 },
            { id: 2, type: 'rating', text: 'Rate the instructor clarity', max: 5 },
            { id: 3, type: 'text', text: 'Additional comments' }
        ],
        responses: 85,
        avgRating: 4.5
    }
];

const MOCK_RESPONSES = [
    { formId: 1, studentId: 'ST001', rating: 4, timestamp: '2024-11-15', comment: 'Great course but fast paced' },
    { formId: 1, studentId: 'ST002', rating: 5, timestamp: '2024-11-14', comment: 'Excellent teaching methods' },
    { formId: 1, studentId: 'ST003', rating: 3, timestamp: '2024-11-13', comment: 'Needs more practice problems' },
    { formId: 2, studentId: 'ST004', rating: 5, timestamp: '2024-11-15', comment: 'Best CS course ever' },
    { formId: 2, studentId: 'ST005', rating: 4, timestamp: '2024-11-14', comment: 'Projects are challenging but rewarding' }
];

// Analytics Data
const RATING_DISTRIBUTION = [
    { name: '5 Stars', value: 45, color: '#4caf50' },
    { name: '4 Stars', value: 35, color: '#8bc34a' },
    { name: '3 Stars', value: 15, color: '#ffc107' },
    { name: '2 Stars', value: 3, color: '#ff9800' },
    { name: '1 Star', value: 2, color: '#f44336' }
];

const COURSE_COMPARISON = [
    { name: 'Math', rating: 4.2, students: 45 },
    { name: 'CS101', rating: 4.5, students: 120 },
    { name: 'English', rating: 4.0, students: 30 },
    { name: 'Physics', rating: 3.8, students: 55 }
];

const TREND_DATA = [
    { week: 'Week 1', satisfaction: 4.0, responses: 20 },
    { week: 'Week 2', satisfaction: 4.2, responses: 45 },
    { week: 'Week 3', satisfaction: 4.1, responses: 60 },
    { week: 'Week 4', satisfaction: 4.5, responses: 85 },
    { week: 'Week 5', satisfaction: 4.3, responses: 95 }
];

const INSTRUCTOR_RADAR = [
    { subject: 'Knowledge', A: 90, fullMark: 100 },
    { subject: 'Communication', A: 85, fullMark: 100 },
    { subject: 'Engagement', A: 88, fullMark: 100 },
    { subject: 'Organization', A: 92, fullMark: 100 },
    { subject: 'Availability', A: 78, fullMark: 100 },
    { subject: 'Fairness', A: 95, fullMark: 100 }
];

// Layout Component
const Layout = ({ children, userRole, setUserRole, currentView, setCurrentView }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    
    const adminMenuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'forms', label: 'Feedback Forms', icon: 'file-text' },
        { id: 'analytics', label: 'Analytics', icon: 'bar-chart-2' },
        { id: 'courses', label: 'Course Management', icon: 'book-open' }
    ];
    
    const studentMenuItems = [
        { id: 'dashboard', label: 'My Dashboard', icon: 'home' },
        { id: 'surveys', label: 'Available Surveys', icon: 'clipboard-list' },
        { id: 'results', label: 'View Results', icon: 'pie-chart' }
    ];
    
    const menuItems = userRole === 'admin' ? adminMenuItems : studentMenuItems;
    
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: userRole === 'admin' ? '#1976d2' : '#388e3c' }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(!drawerOpen)} sx={{ mr: 2 }}>
                        <i data-lucide="menu" className="lucide-icon" style={{ color: 'white' }}></i>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        EduFeedback Pro {userRole === 'admin' ? '| Admin Portal' : '| Student Portal'}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography variant="body2">Role:</Typography>
                        <Select
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value)}
                            size="small"
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', '.MuiSelect-icon': { color: 'white' } }}
                        >
                            <MenuItem value="admin">Administrator</MenuItem>
                            <MenuItem value="student">Student</MenuItem>
                        </Select>
                        <Avatar sx={{ bgcolor: 'white', color: userRole === 'admin' ? '#1976d2' : '#388e3c' }}>
                            {userRole === 'admin' ? 'A' : 'S'}
                        </Avatar>
                    </Box>
                </Toolbar>
            </AppBar>
            
            <Drawer
                variant="permanent"
                open={drawerOpen}
                sx={{
                    width: drawerOpen ? 240 : 60,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerOpen ? 240 : 60,
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        boxSizing: 'border-box',
                        bgcolor: '#fff',
                        borderRight: '1px solid rgba(0,0,0,0.12)'
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem 
                                button 
                                key={item.id} 
                                onClick={() => setCurrentView(item.id)}
                                selected={currentView === item.id}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: drawerOpen ? 'initial' : 'center',
                                    px: 2.5,
                                    bgcolor: currentView === item.id ? (userRole === 'admin' ? 'rgba(25, 118, 210, 0.1)' : 'rgba(56, 142, 60, 0.1)') : 'transparent',
                                    borderRight: currentView === item.id ? 3 : 0,
                                    borderColor: userRole === 'admin' ? 'primary.main' : 'success.main'
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, mr: drawerOpen ? 3 : 'auto', justifyContent: 'center' }}>
                                    <i data-lucide={item.icon} className="lucide-icon" style={{ color: currentView === item.id ? (userRole === 'admin' ? '#1976d2' : '#388e3c') : '#666' }}></i>
                                </ListItemIcon>
                                {drawerOpen && <ListItemText primary={item.label} />}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, bgcolor: '#f5f7fa', minHeight: '100vh' }}>
                {children}
            </Box>
        </Box>
    );
};

// Admin Dashboard Component
const AdminDashboard = ({ forms, responses, courses }) => {
    const stats = [
        { title: 'Active Forms', value: forms.filter(f => f.status === 'active').length, icon: 'file-text', color: '#1976d2' },
        { title: 'Total Responses', value: responses.length, icon: 'users', color: '#388e3c' },
        { title: 'Avg Rating', value: '4.2/5.0', icon: 'star', color: '#f57c00' },
        { title: 'Courses', value: courses.length, icon: 'book-open', color: '#7b1fa2' }
    ];
    
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Admin Dashboard
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ height: 140, position: 'relative', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <Box sx={{ 
                                position: 'absolute', 
                                right: -20, 
                                top: -20, 
                                width: 100, 
                                height: 100, 
                                borderRadius: '50%', 
                                bgcolor: `${stat.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <i data-lucide={stat.icon} style={{ color: stat.color, width: 32, height: 32, marginTop: 20, marginLeft: -10 }}></i>
                            </Box>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom variant="body2" sx={{ fontWeight: 500 }}>
                                    {stat.title}
                                </Typography>
                                <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: stat.color }}>
                                    {stat.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>Response Trends</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={TREND_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                    <XAxis dataKey="week" />
                                    <YAxis />
                                    <RechartsTooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="satisfaction" stroke="#1976d2" name="Avg Satisfaction" strokeWidth={2} />
                                    <Line type="monotone" dataKey="responses" stroke="#388e3c" name="Total Responses" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', height: 400 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>Rating Distribution</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={RATING_DISTRIBUTION}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {RATING_DISTRIBUTION.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
            <Card sx={{ mt: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>Recent Responses</Typography>
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Student ID</TableCell>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>Comment</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {MOCK_RESPONSES.slice(0, 5).map((response, idx) => (
                                    <TableRow key={idx} hover>
                                        <TableCell>{MOCK_FORMS.find(f => f.id === response.formId)?.title}</TableCell>
                                        <TableCell>{response.studentId}</TableCell>
                                        <TableCell>
                                            <Rating value={response.rating} readOnly size="small" />
                                        </TableCell>
                                        <TableCell>{response.comment}</TableCell>
                                        <TableCell>{response.timestamp}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

// Feedback Form Builder Component
const FormBuilder = ({ forms, setForms, courses }) => {
    const [open, setOpen] = React.useState(false);
    const [newForm, setNewForm] = React.useState({ title: '', courseId: '', questions: [] });
    const [newQuestion, setNewQuestion] = React.useState({ type: 'rating', text: '', options: [] });
    const [snackbar, setSnackbar] = React.useState({ open: false, message: '' });
    
    const handleAddQuestion = () => {
        if (!newQuestion.text) return;
        setNewForm({
            ...newForm,
            questions: [...newForm.questions, { ...newQuestion, id: Date.now() }]
        });
        setNewQuestion({ type: 'rating', text: '', options: [] });
    };
    
    const handleSaveForm = () => {
        if (!newForm.title || !newForm.courseId) {
            setSnackbar({ open: true, message: 'Please fill all required fields' });
            return;
        }
        const form = {
            id: Date.now(),
            ...newForm,
            status: 'active',
            responses: 0,
            avgRating: 0
        };
        setForms([...forms, form]);
        setOpen(false);
        setNewForm({ title: '', courseId: '', questions: [] });
        setSnackbar({ open: true, message: 'Form created successfully!' });
    };
    
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>
                    Feedback Forms
                </Typography>
                <Button 
                    variant="contained" 
                    startIcon={<i data-lucide="plus" style={{ width: 18, height: 18 }}></i>}
                    onClick={() => setOpen(true)}
                >
                    Create New Form
                </Button>
            </Box>
            
            <Grid container spacing={3}>
                {forms.map((form) => (
                    <Grid item xs={12} md={6} lg={4} key={form.id}>
                        <Card sx={{ height: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {form.title}
                                    </Typography>
                                    <Chip 
                                        label={form.status} 
                                        color={form.status === 'active' ? 'success' : 'default'}
                                        size="small"
                                    />
                                </Box>
                                <Typography color="textSecondary" variant="body2" sx={{ mb: 2 }}>
                                    Course: {courses.find(c => c.id === form.courseId)?.name || 'Unknown'}
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        <strong>{form.questions.length}</strong> Questions
                                    </Typography>
                                    <Typography variant="body2" sx={{ mb: 1 }}>
                                        <strong>{form.responses}</strong> Responses
                                    </Typography>
                                    {form.avgRating > 0 && (
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Typography variant="body2">Avg Rating:</Typography>
                                            <Rating value={form.avgRating} readOnly size="small" precision={0.1} />
                                            <Typography variant="body2">({form.avgRating})</Typography>
                                        </Box>
                                    )}
                                </Box>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                <Button size="small" startIcon={<i data-lucide="edit" style={{ width: 16, height: 16 }}></i>}>
                                    Edit
                                </Button>
                                <Button size="small" startIcon={<i data-lucide="bar-chart-2" style={{ width: 16, height: 16 }}></i>}>
                                    Results
                                </Button>
                                <Button size="small" color="error" startIcon={<i data-lucide="trash-2" style={{ width: 16, height: 16 }}></i>}>
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>Create New Feedback Form</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Form Title"
                        value={newForm.title}
                        onChange={(e) => setNewForm({ ...newForm, title: e.target.value })}
                        sx={{ mb: 2, mt: 1 }}
                    />
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel>Course</InputLabel>
                        <Select
                            value={newForm.courseId}
                            onChange={(e) => setNewForm({ ...newForm, courseId: e.target.value })}
                        >
                            {courses.map((course) => (
                                <MenuItem key={course.id} value={course.id}>
                                    {course.name} - {course.instructor}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>Questions ({newForm.questions.length})</Typography>
                    
                    {newForm.questions.map((q, idx) => (
                        <Box key={q.id} sx={{ mb: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                Q{idx + 1}. {q.text} ({q.type})
                            </Typography>
                        </Box>
                    ))}
                    
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                        <TextField
                            fullWidth
                            label="Question Text"
                            value={newQuestion.text}
                            onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                            size="small"
                        />
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel size="small">Type</InputLabel>
                            <Select
                                size="small"
                                value={newQuestion.type}
                                onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
                            >
                                <MenuItem value="rating">Rating (1-5)</MenuItem>
                                <MenuItem value="text">Text Answer</MenuItem>
                                <MenuItem value="multiple">Multiple Choice</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="outlined" onClick={handleAddQuestion}>
                            Add
                        </Button>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSaveForm} variant="contained">Create Form</Button>
                </DialogActions>
            </Dialog>
            
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

// Analytics Component
const Analytics = () => {
    const [tabValue, setTabValue] = React.useState(0);
    
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Analytics & Insights
            </Typography>
            
            <Tabs value={tabValue} onChange={(e, v) => setTabValue(v)} sx={{ mb: 3 }}>
                <Tab label="Overview" />
                <Tab label="Course Comparison" />
                <Tab label="Instructor Performance" />
            </Tabs>
            
            {tabValue === 0 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>Satisfaction Trend</Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={TREND_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="week" />
                                        <YAxis />
                                        <RechartsTooltip />
                                        <Line type="monotone" dataKey="satisfaction" stroke="#1976d2" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>Response Rate</Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={TREND_DATA}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="week" />
                                        <YAxis />
                                        <RechartsTooltip />
                                        <Bar dataKey="responses" fill="#388e3c" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>Key Insights</Typography>
                                <Grid container spacing={2}>
                                    {[
                                        { label: 'Response Rate', value: '78%', trend: '+12%', positive: true },
                                        { label: 'Avg Satisfaction', value: '4.3/5', trend: '+0.3', positive: true },
                                        { label: 'Completion Time', value: '4.5 min', trend: '-30s', positive: true },
                                        { label: 'NPS Score', value: '42', trend: '+5', positive: true }
                                    ].map((stat, idx) => (
                                        <Grid item xs={12} sm={6} md={3} key={idx}>
                                            <Box sx={{ p: 2, bgcolor: '#f5f7fa', borderRadius: 2, textAlign: 'center' }}>
                                                <Typography color="textSecondary" variant="body2">{stat.label}</Typography>
                                                <Typography variant="h4" sx={{ my: 1, fontWeight: 600 }}>{stat.value}</Typography>
                                                <Typography variant="body2" sx={{ color: stat.positive ? '#4caf50' : '#f44336' }}>
                                                    {stat.trend} vs last month
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
            
            {tabValue === 1 && (
                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ mb: 2 }}>Course Performance Comparison</Typography>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={COURSE_COMPARISON} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" domain={[0, 5]} />
                                <YAxis dataKey="name" type="category" width={100} />
                                <RechartsTooltip />
                                <Legend />
                                <Bar dataKey="rating" fill="#1976d2" name="Avg Rating" />
                                <Bar dataKey="students" fill="#90caf9" name="Total Students" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            )}
            
            {tabValue === 2 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>Instructor Skills Radar</Typography>
                                <ResponsiveContainer width="100%" height={400}>
                                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={INSTRUCTOR_RADAR}>
                                        <PolarGrid />
                                        <PolarAngleAxis dataKey="subject" />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                        <Radar name="Avg Performance" dataKey="A" stroke="#1976d2" fill="#1976d2" fillOpacity={0.3} />
                                        <Legend />
                                        <RechartsTooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2 }}>Top Performing Instructors</Typography>
                                <List>
                                    {[
                                        { name: 'Dr. Sarah Johnson', course: 'Advanced Mathematics', rating: 4.8, students: 124 },
                                        { name: 'Prof. Michael Chen', course: 'Computer Science 101', rating: 4.6, students: 89 },
                                        { name: 'Dr. Emily Williams', course: 'English Literature', rating: 4.5, students: 67 },
                                        { name: 'Dr. Robert Brown', course: 'Physics II', rating: 4.3, students: 98 }
                                    ].map((inst, idx) => (
                                        <ListItem key={idx} sx={{ mb: 2, bgcolor: '#f5f7fa', borderRadius: 2 }}>
                                            <ListItemIcon>
                                                <Avatar sx={{ bgcolor: '#1976d2' }}>{idx + 1}</Avatar>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={inst.name}
                                                secondary={`${inst.course} • ${inst.students} reviews`}
                                            />
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Rating value={inst.rating} readOnly size="small" precision={0.1} />
                                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                                    {inst.rating}
                                                </Typography>
                                            </Box>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

// Course Management Component
const CourseManagement = ({ courses, setCourses }) => {
    const [open, setOpen] = React.useState(false);
    const [newCourse, setNewCourse] = React.useState({ name: '', instructor: '', department: '', semester: '' });
    
    const handleSave = () => {
        setCourses([...courses, { ...newCourse, id: Date.now(), students: 0 }]);
        setOpen(false);
        setNewCourse({ name: '', instructor: '', department: '', semester: '' });
    };
    
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#333' }}>
                    Course Management
                </Typography>
                <Button 
                    variant="contained" 
                    startIcon={<i data-lucide="plus" style={{ width: 18, height: 18 }}></i>}
                    onClick={() => setOpen(true)}
                >
                    Add Course
                </Button>
            </Box>
            
            <TableContainer component={Paper} sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: '#f5f7fa' }}>
                            <TableCell sx={{ fontWeight: 600 }}>Course Name</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Instructor</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Semester</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Students</TableCell>
                            <TableCell sx={{ fontWeight: 600 }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map((course) => (
                            <TableRow key={course.id} hover>
                                <TableCell sx={{ fontWeight: 500 }}>{course.name}</TableCell>
                                <TableCell>{course.instructor}</TableCell>
                                <TableCell>
                                    <Chip label={course.department} size="small" variant="outlined" />
                                </TableCell>
                                <TableCell>{course.semester}</TableCell>
                                <TableCell>{course.students}</TableCell>
                                <TableCell>
                                    <IconButton size="small" color="primary">
                                        <i data-lucide="edit" style={{ width: 18, height: 18 }}></i>
                                    </IconButton>
                                    <IconButton size="small" color="error">
                                        <i data-lucide="trash-2" style={{ width: 18, height: 18 }}></i>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Course Name"
                        value={newCourse.name}
                        onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                        sx={{ mb: 2, mt: 1 }}
                    />
                    <TextField
                        fullWidth
                        label="Instructor Name"
                        value={newCourse.instructor}
                        onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                        sx={{ mb: 2 }}
                    />
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Department</InputLabel>
                        <Select
                            value={newCourse.department}
                            onChange={(e) => setNewCourse({ ...newCourse, department: e.target.value })}
                        >
                            <MenuItem value="Mathematics">Mathematics</MenuItem>
                            <MenuItem value="Computer Science">Computer Science</MenuItem>
                            <MenuItem value="Humanities">Humanities</MenuItem>
                            <MenuItem value="Physics">Physics</MenuItem>
                            <MenuItem value="Chemistry">Chemistry</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Semester"
                        value={newCourse.semester}
                        onChange={(e) => setNewCourse({ ...newCourse, semester: e.target.value })}
                        placeholder="e.g., Fall 2024"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained">Save Course</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

// Student Dashboard Component
const StudentDashboard = ({ forms, responses }) => {
    const availableForms = forms.filter(f => f.status === 'active');
    const completedCount = responses.filter(r => r.studentId === 'ST001').length;
    
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Welcome Back, Student! 👋
            </Typography>
            
            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ bgcolor: '#e3f2fd', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Available Surveys</Typography>
                            <Typography variant="h3" color="primary">{availableForms.length}</Typography>
                            <LinearProgress variant="determinate" value={60} sx={{ mt: 2 }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ bgcolor: '#e8f5e9', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Completed</Typography>
                            <Typography variant="h3" color="success.main">{completedCount}</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>Keep it up!</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ bgcolor: '#fff3e0', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Your Impact</Typography>
                            <Typography variant="h3" color="warning.main">85%</Typography>
                            <Typography variant="body2" sx={{ mt: 1 }}>Feedback influence score</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>Available Feedback Forms</Typography>
            <Grid container spacing={3}>
                {availableForms.map((form) => (
                    <Grid item xs={12} md={6} key={form.id}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {form.title}
                                    </Typography>
                                    <Chip label="New" color="success" size="small" />
                                </Box>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    Help improve your learning experience by providing feedback on this course.
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <i data-lucide="help-circle" style={{ width: 16, height: 16, color: '#666' }}></i>
                                    <Typography variant="body2">{form.questions.length} questions</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <i data-lucide="clock" style={{ width: 16, height: 16, color: '#666' }}></i>
                                    <Typography variant="body2">Takes ~3 minutes</Typography>
                                </Box>
                            </CardContent>
                            <CardActions sx={{ p: 2 }}>
                                <Button 
                                    variant="contained" 
                                    fullWidth 
                                    startIcon={<i data-lucide="edit" style={{ width: 18, height: 18 }}></i>}
                                >
                                    Start Survey
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// Student Survey View Component
const StudentSurveys = ({ forms }) => {
    const [activeSurvey, setActiveSurvey] = React.useState(null);
    const [answers, setAnswers] = React.useState({});
    
    if (activeSurvey) {
        const form = forms.find(f => f.id === activeSurvey);
        return (
            <Box>
                <Button startIcon={<i data-lucide="arrow-left" style={{ width: 18, height: 18 }}></i>} onClick={() => setActiveSurvey(null)} sx={{ mb: 2 }}>
                    Back to Surveys
                </Button>
                <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: 800, mx: 'auto' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>{form.title}</Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
                            Your feedback is anonymous and helps improve the course quality.
                        </Typography>
                        
                        {form.questions.map((q, idx) => (
                            <Box key={q.id} sx={{ mb: 4 }}>
                                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                                    {idx + 1}. {q.text}
                                </Typography>
                                {q.type === 'rating' && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Rating 
                                            value={answers[q.id] || 0} 
                                            onChange={(e, v) => setAnswers({ ...answers, [q.id]: v })}
                                            size="large"
                                        />
                                        <Typography variant="body2" color="textSecondary">
                                            {answers[q.id] ? ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][answers[q.id] - 1] : 'Select a rating'}
                                        </Typography>
                                    </Box>
                                )}
                                {q.type === 'text' && (
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        placeholder="Type your answer here..."
                                        value={answers[q.id] || ''}
                                        onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                                    />
                                )}
                                {q.type === 'multiple' && (
                                    <FormControl fullWidth>
                                        <Select
                                            value={answers[q.id] || ''}
                                            onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                                        >
                                            {q.options.map((opt, i) => (
                                                <MenuItem key={i} value={opt}>{opt}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            </Box>
                        ))}
                        
                        <Button 
                            variant="contained" 
                            size="large" 
                            fullWidth 
                            sx={{ mt: 2 }}
                            startIcon={<i data-lucide="send" style={{ width: 18, height: 18 }}></i>}
                        >
                            Submit Feedback
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        );
    }
    
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Available Surveys
            </Typography>
            <Grid container spacing={3}>
                {forms.filter(f => f.status === 'active').map((form) => (
                    <Grid item xs={12} md={6} key={form.id}>
                        <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>{form.title}</Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                                    Course: {MOCK_COURSES.find(c => c.id === form.courseId)?.name}
                                </Typography>
                                <LinearProgress variant="determinate" value={0} sx={{ mb: 2 }} />
                                <Typography variant="caption" color="textSecondary">
                                    Not started • {form.questions.length} questions
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    variant="contained" 
                                    onClick={() => setActiveSurvey(form.id)}
                                    startIcon={<i data-lucide="play" style={{ width: 16, height: 16 }}></i>}
                                >
                                    Start Survey
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// Student Results View Component
const StudentResults = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: '#333' }}>
                Public Results & Insights
            </Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>Course Satisfaction</Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={COURSE_COMPARISON}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis domain={[0, 5]} />
                                    <RechartsTooltip />
                                    <Bar dataKey="rating" fill="#388e3c" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2 }}>Student Sentiment</Typography>
                            <List>
                                {[
                                    { text: "Great course content and engaging lectures!", sentiment: "positive", count: 45 },
                                    { text: "More practical examples would be helpful", sentiment: "neutral", count: 23 },
                                    { text: "Fast-paced but manageable", sentiment: "neutral", count: 18 },
                                    { text: "Excellent instructor support", sentiment: "positive", count: 52 }
                                ].map((item, idx) => (
                                    <ListItem key={idx} sx={{ bgcolor: idx % 2 === 0 ? '#f5f7fa' : 'transparent', borderRadius: 1, mb: 1 }}>
                                        <ListItemIcon>
                                            <i data-lucide={item.sentiment === 'positive' ? 'thumbs-up' : 'message-circle'} style={{ 
                                                width: 20, 
                                                height: 20, 
                                                color: item.sentiment === 'positive' ? '#4caf50' : '#ff9800' 
                                            }}></i>
                                        </ListItemIcon>
                                        <ListItemText primary={item.text} secondary={`${item.count} students agreed`} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

// Main App Component
const App = () => {
    const [userRole, setUserRole] = React.useState('admin');
    const [currentView, setCurrentView] = React.useState('dashboard');
    const [courses, setCourses] = React.useState(MOCK_COURSES);
    const [forms, setForms] = React.useState(MOCK_FORMS);
    const [responses] = React.useState(MOCK_RESPONSES);
    
    // Re-initialize icons when view changes
    React.useEffect(() => {
        setTimeout(() => lucide.createIcons(), 100);
    }, [currentView, userRole]);
    
    const renderContent = () => {
        if (userRole === 'admin') {
            switch (currentView) {
                case 'dashboard':
                    return <AdminDashboard forms={forms} responses={responses} courses={courses} />;
                case 'forms':
                    return <FormBuilder forms={forms} setForms={setForms} courses={courses} />;
                case 'analytics':
                    return <Analytics />;
                case 'courses':
                    return <CourseManagement courses={courses} setCourses={setCourses} />;
                default:
                    return <AdminDashboard forms={forms} responses={responses} courses={courses} />;
            }
        } else {
            switch (currentView) {
                case 'dashboard':
                    return <StudentDashboard forms={forms} responses={responses} />;
                case 'surveys':
                    return <StudentSurveys forms={forms} />;
                case 'results':
                    return <StudentResults />;
                default:
                    return <StudentDashboard forms={forms} responses={responses} />;
            }
        }
    };
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout 
                userRole={userRole} 
                setUserRole={setUserRole} 
                currentView={currentView} 
                setCurrentView={setCurrentView}
            >
                {renderContent()}
            </Layout>
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);